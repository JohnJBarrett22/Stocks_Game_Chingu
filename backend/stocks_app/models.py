from django.db import models
from django.contrib.auth.models import User

class Lead(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    userName = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    owner = models.ForeignKey(
        User,
        related_name="leads",
        on_delete=models.CASCADE,
        null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
