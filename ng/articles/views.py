from rest_framework.viewsets import ModelViewSet
from . import serializers
from . import models


class CategoryViewSet(ModelViewSet):
    model = models.Category
    serializer_class = serializers.CategorySerializer


class ArticleViewSet(ModelViewSet):
    model = models.Category
    serializer_class = serializers.ArticleSerializer
