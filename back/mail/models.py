from django.db import models

# Create your models here.
class Mail(models.Model):
    name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    email_address = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    content = models.TextField()
