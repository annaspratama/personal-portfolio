from django.db import models


class About(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=5000, null=True)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    url_instagram = models.URLField(null=True, blank=True)
    url_github = models.URLField(null=True, blank=True)
    image = models.ImageField(upload_to='images/about', null=True, blank=True)

    def __str__(self) -> str:
        """
        Returns a string representation of the object.

        This method overrides the default implementation of the `__str__` method in the `models.Model` class.
        It returns the value of the `title` attribute of the `About` object as a string.

        Returns:
            str: The title of the `About` object.
        """
                
        return self.title
    
    class Meta:
        db_table = "about"
        verbose_name = "About"
        verbose_name_plural = "About"

    
class Expertise(models.Model):
    programming_language = models.CharField(max_length=30, null=True, blank=True)
    image = models.ImageField(upload_to='images/expertise', null=True, blank=True)
    framework = models.CharField(max_length=100, null=True, blank=True)
    url = models.URLField(null=True, blank=True)

    def __str__(self):
        """
        Returns a string representation of the object.

        This method overrides the default implementation of the `__str__` method in the `Expertise` class.
        It returns the value of the `programming_language` attribute of the `Expertise` object as a string.

        Returns:
            str: The programming language of the `Expertise` object.
        """

        return f"{self.programming_language} - {self.framework}"
    
    class Meta:
        db_table = "expertise"
        verbose_name = "Expertise"
        verbose_name_plural = "Expertise"
    

class WorkExperience(models.Model):
    title = models.CharField(max_length=50)
    company = models.CharField(max_length=100)
    description = models.TextField(max_length=5000, null=True, blank=True)
    start_year = models.IntegerField(null=True)
    end_year = models.IntegerField(null=True, default=0)
    url = models.URLField(null=True, blank=True)
    image = models.ImageField(upload_to='images/experience', null=True, blank=True)

    def __str__(self) -> str:
        """
        Returns a string representation of the WorkExperience object.

        This method overrides the default implementation of the `__str__` method in the `WorkExperience` class.
        It returns a formatted string that includes the `title` attribute of the `WorkExperience` object, followed by the `start_year` and `end_year` attributes enclosed in parentheses.

        Returns:
            str: A string representation of the WorkExperience object.
        """
                
        return f"{self.title} ({self.start_year} - {self.end_year})"
    
    
    class Meta:
        db_table = "work_experience"
        verbose_name = "Work Experience"
        verbose_name_plural = "Work Experiences"

    
class Project(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    url = models.URLField(null=True, blank=True)
    start_year = models.IntegerField(null=True)
    end_year = models.IntegerField(null=True, default=0)
    position = models.CharField(max_length=50, choices=[('Back End Developer', 'Back End Developer'), ('Full Stack Developer', 'Full Stack Developer')], default="Back End Developer")

    def __str__(self) -> str:
        """
        Returns a string representation of the WorkExperience object.

        This method overrides the default implementation of the `__str__` method in the `WorkExperience` class.
        It returns a formatted string that includes the `title` attribute of the `WorkExperience` object, followed by the `start_year` and `end_year` attributes enclosed in parentheses, and the `position` attribute.

        Returns:
            str: A string representation of the WorkExperience object.
        """

        return f"{self.title} ({self.start_year} - {self.end_year}) {self.position}"
    
    class Meta:
        db_table = "project"
        verbose_name = "Project"
        verbose_name_plural = "Projects"


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/project', null=True, blank=True)

    def __str__(self) -> str:
        """
        Returns a string representation of the object.

        This method overrides the default implementation of the `__str__` method in the `Image` class.
        It returns a formatted string that includes the title of the project associated with the image.

        Returns:
            str: A string representation of the object.
        """
                
        return f"Image of {self.project.title}"

    class Meta:
        db_table = "project_image"
        verbose_name = "Project Image"
        verbose_name_plural = "Project Images"


class Stack(models.Model):
    project = models.ManyToManyField(Project, related_name='stacks', verbose_name="Project", blank=True)
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images/stack', null=True, blank=True)

    def __str__(self) -> str:
        """
        Returns a string representation of the Stack object.

        This method overrides the default implementation of the `__str__` method in the `Stack` class.
        It returns the value of the `name` attribute of the `Stack` object as a string.

        Returns:
            str: The name of the `Stack` object.
        """

        return self.name
    
    class Meta:
        db_table = "stack"
        verbose_name = "Stack"
        verbose_name_plural = "Stacks"