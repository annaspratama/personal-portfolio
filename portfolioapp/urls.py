from django.urls import path
from . import views


app_name = 'portfolioapp'

urlpatterns = [
    path(route='about', view=views.DetailAbout.as_view(), name='about'),
    path(route='expertise', view=views.ListExpertiseList.as_view(), name='expertise-list'),
    path(route='work-experiences', view=views.WorkExperienceList.as_view(), name='workexperience-list'),
    path(route='projects', view=views.ProjectsList.as_view(), name='projects-list'),
    path(route='<int:pk>/project', view=views.ProjectsDetail.as_view(), name='project-detail'),
]