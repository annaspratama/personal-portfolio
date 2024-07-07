"""portfolioproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from portfolioapp import views
from django.conf.urls.static import static
from . import settings

urlpatterns = [
    path(route='admin/', view=admin.site.urls, name='administrator'),
    path(route='api-auth/', view=include('rest_framework.urls'), name='rest_framework'),
    path(route='', view=views.index, name='home'),
    # path(route='manifest.json', view=TemplateView.as_view(template_name='manifest.json', content_type='application/json'), name='manifest.json')
]

# APIs URL
urlpatterns += [
    path('api/', include('portfolioapp.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += [ path('__debug__/', include(debug_toolbar.urls)) ]