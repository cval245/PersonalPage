from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from mail.tasks import add, send_email
from rest_framework.parsers import JSONParser
from . import serializers
from .models import Mail
# Create your views here.

@csrf_exempt
def sendEmail(request):

    if request.method == 'GET':
        data = Mail.objects.all()
        serializer = serializers.MailSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = serializers.MailSerializer(data=data)
        if serializer.is_valid():
            #serializer.sendMail()
            result = send_email(serializer)
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
