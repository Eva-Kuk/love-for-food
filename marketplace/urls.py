from django.urls import path
from . import views

urlpatterns = [
    path('', views.marketplace, name='marketplace'),
]