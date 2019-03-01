from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from post import views as postViews
from account import views as accountViews
from knox import views as knox_views

router = routers.DefaultRouter()
router.register(r'posts', postViews.PostViewSet)
router.register(r'categories', postViews.CategoryViewSet)
router.register(r'test', postViews.Test)

urlpatterns = [
    path('api/', include(router.urls)),
    # path('api/posts/', postViews.PostViewSet.as_view()),  
    # path('api/posts/<pk>', postViews.PostRudViewSet.as_view()),  
    path('api/auth/', include('knox.urls')),
    path('api/auth/register/', accountViews.RegisterViews.as_view()), 
    path('api/auth/login', accountViews.LoginViews.as_view()), 
    path('api/auth/logout/', knox_views.LogoutView.as_view()), 
    path('api/auth/user/', accountViews.UserViews.as_view()),  
    path('api/auth/users/', accountViews.UsersViews.as_view()),  
]
