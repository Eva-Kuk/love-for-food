# Generated by Django 4.1 on 2022-11-26 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_userprofile_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='pin_code',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
