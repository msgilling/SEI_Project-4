from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class Image(models.Model):
    caption = models.CharField(max_length=500, default=None)
    image = models.CharField(max_length=500, default=None)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name = "Uploads",
        on_delete = models.PROTECT, 
        default=None
        
    )
    
    def __str__(self):
        return f'{self.caption}'
        