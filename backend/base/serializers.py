from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True) # custom field based on already existing fields. 
    _id = serializers.SerializerMethodField(read_only=True)
    is_admin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields  = ['id', 'username', 'email', 'name', '_id', 'is_admin']
    
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        
        return name
    
    def get__id(self, obj):
        return obj.id
        
    def get_is_admin(self, obj):
        return obj.is_staff

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        # 2 required attributes 
        # 1. model -> the model which we need to serialize
        # 2. fields -> which needed
        model = Product
        fields = '__all__'