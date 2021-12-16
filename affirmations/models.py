from typing import Text
from django.db import models

# Create your models here.
class Affirmation(models.Model):
    text = models.CharField(max_length=500, default=None)
        
    def __str__(self):
        return f'{self.text}'
