from django.db import models

from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    profile_image = models.CharField(max_length=500, default='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png')
    about_me = models.CharField(max_length=500, blank=True)
    pronouns = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return f'{self.username}'
