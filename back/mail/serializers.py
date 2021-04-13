from rest_framework import serializers

from django.core.mail import send_mail

class MailSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    company = serializers.CharField(max_length=100)
    email_address = serializers.CharField(max_length=100)
    subject = serializers.CharField(max_length=100)
    content = serializers.CharField()

    def sendMail(self):
        print(self, "printing self")
        message = self.data['content']+ '\n\n\n from %s, %s'%(self.data['name'],
                                                       self.data['company'])
        send_mail(self.data['subject'], message, None,
                  ['cval.me@patport.cc', self.data['email_address']])
