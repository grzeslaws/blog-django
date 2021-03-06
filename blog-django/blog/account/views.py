from django.shortcuts import render
from .serializers import RegisterSerializer, UserSerializer, LoginSerializer
from rest_framework import viewsets, generics, permissions, views, status
from rest_framework.response import Response
from knox.models import AuthToken
from django.contrib.auth.models import User

import pprint
pp = pprint.PrettyPrinter(indent=4)


class RegisterViews(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })


class LoginViews(generics.GenericAPIView):
    serializer_class = LoginSerializer

    print("request")
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class UserViews(generics.RetrieveAPIView):
    permission_classes = [
        # permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get_object(self):

        # pp.pprint(self.request.user.__dict__)
        return self.request.user

class UsersViews(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [
        # permissions.IsAuthenticated,
    ]
