from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
class Comment(models.Model):
    text = models.CharField(max_length=500, default=None)
    image = models.ForeignKey("images.Image", on_delete=models.CASCADE)
    owners = models.ForeignKey(
        "jwt_auth.User",
        related_name = "commented",
        on_delete = models.PROTECT, 
        default=None
        
    )

    def __str__(self):
        return f'{self.text}'