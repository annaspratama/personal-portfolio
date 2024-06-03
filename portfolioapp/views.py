from django.shortcuts import render
from rest_framework import response, views
from .models import About
from .serializers import AboutSerializer
# from django.views.generic import ListView
# from portfolioapp.models import Portfolio, ProgrammingLanguage

# class PortfolioList(ListView):
#     model = Portfolio

#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['programming_language_list'] = ProgrammingLanguage.objects.all().order_by('created_date')
#         return context
    
def index(request):
    """
    Renders the index.html template and returns it as an HTTP response.

    Parameters:
        request (HttpRequest): The HTTP request object.

    Returns:
        HttpResponse: The rendered index.html template.
    """
        
    return render(request=request, template_name="index.html")


class DetailAbout(views.APIView):
    
    def get(self, request):
        """
        Retrieves the first instance of the `About` model from the database and returns it as a response.

        Parameters:
            request (HttpRequest): The HTTP request object.

        Returns:
            response.Response: The response object containing the serialized `About` instance.
        """
        
        about = About.objects.first()
        serializer = AboutSerializer(about)
        
        return response.Response(data=serializer.data)