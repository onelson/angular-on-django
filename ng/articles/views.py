from rest_framework.viewsets import ModelViewSet
from . import serializers
from . import models


class CategoryViewSet(ModelViewSet):
    model = models.Category
    serializer_class = serializers.CategorySerializer


class ArticleViewSet(ModelViewSet):
    model = models.Article
    serializer_class = serializers.ArticleSerializer

    def create(self, request, *args, **kwargs):
        request.DATA['author'] = request.user.id
        resp = super(ArticleViewSet, self).create(request, *args, **kwargs)
        return resp