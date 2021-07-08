from django.urls import path
from . import views

urlpatterns = [
    path('get-resume', views.resume_get, name='resume_get')
]
