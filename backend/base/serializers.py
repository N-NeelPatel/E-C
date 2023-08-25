from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        # 2 required attributes 
        # 1. model -> the model which we need to serialize
        # 2. fields -> which needed
        model = Product
        fields = '__all__'