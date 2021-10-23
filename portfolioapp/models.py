# from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Portfolio(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=5000)
    image = models.ImageField(upload_to='images')
    year = models.IntegerField(null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-year']

    def __str__(self) -> str:
        return self.title

class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    framework = models.CharField(max_length=50, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

# class UserProfile(models.Model):
#     user = models.OneToOneField(User, related_name='user_profile', on_delete=models.CASCADE)
#     instagram_site = models.URLField(blank=True)
#     facebook_site = models.URLField(blank=True)
#     twitter_site = models.URLField(blank=True)
#     profile_img = models.ImageField(upload_to='images', blank=True)

#     def __str__(self) -> str:
#         return self.user.username