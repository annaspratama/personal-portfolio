import json
from .utils import static_fallback_open
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie
from django.core.cache import cache
from rest_framework import response, views, generics, permissions
from rest_framework.pagination import PageNumberPagination
from portfolioproject.authentication import BearerTokenAuthentication
from .models import About, Expertise, WorkExperience, Project
from .serializers import AboutSerializer, ExpertiseSerializer, WorkExperienceSerializer, ProjectListDetailSerializer, ProjectDetailSerializer, RecentProjectsSerializer

    
def index(request):
    """
    Renders the index.html template and returns it as an HTTP response.

    Parameters:
        request (HttpRequest): The HTTP request object.

    Returns:
        HttpResponse: The rendered index.html template.
    """
    
    asset_manifest = {}
    with static_fallback_open(static_path="asset-manifest.json") as json_file:
        asset_manifest = json.load(json_file)
        
    react_css_bundle = asset_manifest["files"]["main.css"]
    react_js_bundle = asset_manifest["files"]["main.js"]
    # react_css_bundle = f"/static{react_css_bundle}"
    # react_js_bundle = f"/static{react_js_bundle}"

    context = {"react_css_bundle": react_css_bundle, "react_js_bundle": react_js_bundle}
        
    return render(request=request, template_name="index.html", context=context)


class DetailAbout(views.APIView):
    authentication_classes = (BearerTokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    
    @method_decorator(cache_page(60 * 60 * 24))
    @method_decorator(vary_on_cookie)
    def get(self, request):
        """
        Retrieves the first instance of the `About` model from the database and returns it as a response.

        Parameters:
            request (HttpRequest): The HTTP request object.

        Returns:
            Response: The serialized data of the first `About` object.
        """
        
        about = About.objects.first()
        serializer = AboutSerializer(about)
        
        return response.Response(data=serializer.data)
    

class ListExpertiseList(generics.ListAPIView):
    authentication_classes = (BearerTokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer
    
    
class WorkExperienceList(generics.ListAPIView):
    authentication_classes = (BearerTokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer
    
    
class ListPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = "page_size"
    max_page_size = 10
    

class ProjectsList(generics.ListAPIView):
    authentication_classes = (BearerTokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Project.objects.all()
    serializer_class = ProjectListDetailSerializer
    pagination_class = ListPagination
    
    def get_queryset(self):
        """
        Retrieves the queryset for the view.

        This method retrieves the queryset for the view and applies any necessary filtering based on the
        `type` parameter in the request. If the `type` parameter is set to `'recent'`, the queryset is
        ordered by the `-id` field and limited to the first two items.

        Returns:
            QuerySet: The filtered queryset.
        """
        
        timeout = 60 * 60 * 1 # 1 hour
        queryset = self.queryset
        
        type_param = self.request.GET.get('type')
        
        if type_param == 'recent':
            cached_data = cache.get('recent_projects')
            queryset = queryset.order_by('-id')[:2]
            cache.set(key='recent_projects', value=queryset, timeout=timeout)
        else:
            cached_data = cache.get('all_projects')
            queryset = queryset.order_by('-id')
            cache.set(key='all_projects', value=queryset, timeout=timeout)
        
        return cached_data if cached_data else queryset
    
    def get_serializer_class(self):
        """
        Returns the appropriate serializer class based on the value of the 'type' query parameter in the request.

        This function takes no parameters.

        Returns:
            The serializer class to be used for the view. If the 'type' query parameter is set to 'recent', it returns
            the `RecentProjectsSerializer` class. Otherwise, it returns the `serializer_class` attribute of the view.
        """
        
        type_param = self.request.GET.get('type')
        
        if type_param == 'recent': return RecentProjectsSerializer; 
        
        return self.serializer_class


class ProjectsDetail(generics.RetrieveAPIView):
    authentication_classes = (BearerTokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Project.objects.all()
    serializer_class = ProjectDetailSerializer