from django.contrib import admin
from portfolioapp.models import About, Expertise, WorkExperience, \
    Project, ProjectImage, Stack

# Register your models here.
admin.site.register(About)
admin.site.register(Expertise)
admin.site.register(WorkExperience)
admin.site.register(Project)
admin.site.register(ProjectImage)
admin.site.register(Stack)