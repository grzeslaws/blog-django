from .models import User
from .serializers import UserSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer