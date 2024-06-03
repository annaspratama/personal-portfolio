from django.urls import path
from rest_framework import routers
from . import views


app_name = 'portfolioapp'

router = routers.DefaultRouter()

urlpatterns = [
    path(route='about', view=views.DetailAbout.as_view(), name='about'),
]