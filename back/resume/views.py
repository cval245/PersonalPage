from django.shortcuts import render
from django.http import FileResponse
from rest_framework.decorators import api_view
from django.conf import settings
# Create your views here.

@api_view(['get'])
def resume_get(request):
    resume=open('media/resume/Resume-CValentine.pdf', 'rb')
    return FileResponse(resume)