# Generated by Django 3.2.3 on 2021-06-20 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('company', models.CharField(max_length=100)),
                ('email_address', models.CharField(max_length=100)),
                ('subject', models.CharField(max_length=100)),
                ('content', models.TextField()),
            ],
        ),
    ]