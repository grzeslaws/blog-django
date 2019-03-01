from .models import User
from post.models import Post
from rest_framework import serializers
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.HyperlinkedModelSerializer):

    posts = serializers.HyperlinkedRelatedField(
        many=True, view_name='post-detail', read_only=True)
    password = serializers.CharField(
        write_only=True,
        required=True,
        help_text='Leave empty if no change needed',
        style={'input_type': 'password', 'placeholder': 'Password'}
    )

    class Meta:
        model = User
        fields = ('url', 'id', 'password', 'username', 'first_name',
                  'last_name', 'email', 'posts', 'image')

    def create(self, validated_data):
        validated_data['password'] = make_password(
            validated_data.get('password'))
        return super(UserSerializer, self).create(validated_data)
