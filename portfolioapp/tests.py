from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APITestCase, APIClient
from rest_framework.authtoken.models import Token


class AboutTestCase(TestCase):
    
    def setUp(self) -> None:
        """
        Set up the test case by creating a test user and obtaining an authentication token.
        
        This function initializes the test case by creating a test user using the `User.objects.create_user` method with the specified username and password. It then creates an authentication token for the test user using the `Token.objects.create` method. Finally, it sets up the APIClient with the authentication credentials using the `client.credentials` method.
        
        Parameters:
            self (TestCase): The current test case instance.
        
        Returns:
            None
        """
        
        
        self.user = User.objects.create_user(
            username='testuser',
            password='testpassword'
        )
        self.token = Token.objects.create(user=self.user)
        self.client = APIClient()
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {self.token.key}")
    
    def test_about(self):
        
        response = self.client.get(path='/about/')
        
        self.assertEqual(first=response.status_code, second=200)