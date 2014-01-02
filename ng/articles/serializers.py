from rest_framework import serializers
from . import models


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Category


class ArticleSerializer(serializers.ModelSerializer):

    _categories = CategorySerializer(source='categories', read_only=True)
    _author = serializers.Field(source='author.username')

    class Meta:
        model = models.Article
