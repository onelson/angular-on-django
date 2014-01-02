from django.db import models


class Category(models.Model):
    title = models.TextField(max_length=80)
    slug = models.SlugField()


class Article(models.Model):
    author = models.ForeignKey('auth.User', related_name='articles')
    body = models.TextField()
    categories = models.ManyToManyField(Category, related_name='articles')
    published = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200)
    slug = models.SlugField()
