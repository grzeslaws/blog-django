from django.shortcuts import render
from .serializers import PostSerializer, CategorySerializer
from account.serializers import UserSerializer
from .models import Post, Category
from rest_framework import viewsets
from rest_framework import permissions, generics, mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q
from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response
import pprint
pp = pprint.PrettyPrinter(indent=4)


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        qs = Post.objects.all()
        query = self.request.query_params.get("q")

        if query is not None:
            qs = qs.filter(
                Q(title__icontains=query) or
                Q(text__icontains=query)).distinct()
        return qs

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(['get'], detail=False)
    def newest(self, request):
        qs = self.get_queryset().order_by('title').last()
        print(self.get_serializer(qs).data)

        return Response({
            "number_of_posts": len(self.queryset),
            "newest_post": self.get_serializer(qs).data,
            "newest_post_data": self.get_serializer(qs).data.get('created_at'),
        })


class Test(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # def get_queryset(self):
    #     return User.objects.first()

    @action(['get'], detail=False)
    def last(self, request):
        last = self.get_queryset().last()
        return Response({
            "last": self.get_serializer(last).data
        })


# temp
# class PostViewSet(mixins.CreateModelMixin, generics.ListAPIView):

#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

#     def post(self, serializer, *args, **kwargs):
#         serializer = PostSerializer(data=self.request.data)
#         serializer.is_valid()
#         # print(self.request.user)
#         # serializer.save(author=self.request.user)
#         r = self.request
#         r.data.author = self.request.user
#         pp.pprint(r.__dict__)
#         self.create(r, *args, **kwargs)
#         return Response({
#             "message": "Post has been created!",
#             "post":  self.get_serializer(serializer.validated_data, context=self.get_serializer_context()).data
#         })

#     def list(self, request, *args, **kwargs):
#         queryset = self.get_queryset()
#         page = self.paginate_queryset(queryset)
#         if page is not None:
#             serializer = self.get_serializer(page, many=True)
#         else:
#             serializer = self.get_serializer(queryset, many=True)
#         return Response(serializer.data)


class PostRudViewSet(generics.RetrieveAPIView):
    lookup_field = 'pk'

    def get_queryset(self):
        queryset = Post.objects.all()
        return queryset
    serializer_class = PostSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
