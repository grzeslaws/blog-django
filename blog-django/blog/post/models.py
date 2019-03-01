from django.db import models
from django.contrib.auth.models import User
from hashid_field import HashidAutoField

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Post(models.Model):
    id = HashidAutoField(primary_key=True)
    title = models.CharField(max_length=50)
    text = models.TextField()
    categories = models.ManyToManyField(Category, blank=True)
    author = models.ForeignKey(User, related_name="posts", null=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
