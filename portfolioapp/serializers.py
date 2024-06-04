from .models import About, Expertise, WorkExperience, Project, ProjectImage, Stack
from rest_framework import serializers


class AboutSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = About
        fields = '__all__'
        
        
class ExpertiseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Expertise
        fields = '__all__'
        
        
class WorkExperienceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = WorkExperience
        fields = '__all__'
        
        
class ProjectsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Project
        fields = '__all__'
        

class ProjectImagesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ProjectImage
        fields = ('id', 'image')
        
        
class StackSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Stack
        fields = ('id', 'name', 'image')
        
        
class ProjectSerializer(serializers.ModelSerializer):
    
    images = ProjectImagesSerializer(many=True, read_only=True)
    stacks = StackSerializer(many=True, read_only=True)
    
    class Meta:
        model = Project
        fields = '__all__'