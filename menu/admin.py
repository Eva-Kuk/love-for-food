from django.contrib import admin
from .models import FoodItem, Category


# Register your models here.
admin.site.register(Category)
admin.site.register(FoodItem)