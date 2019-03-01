from .models import Post, Category
from rest_framework import serializers
from hashid_field.rest import HashidSerializerCharField


class PostSerializer(serializers.ModelSerializer):
    id = HashidSerializerCharField(source_field='post.Post.id', read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'text',
                  'categories', 'author', 'created_at')


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
