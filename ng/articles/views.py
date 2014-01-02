from rest_framework.viewsets import ModelViewSet
from . import serializers
from . import models


class CategoryViewSet(ModelViewSet):
    model = models.Category
    serializer_class = serializers.CategorySerializer

    def get_queryset(self):
        return super(CategoryViewSet, self).get_queryset().order_by('title')


class ArticleViewSet(ModelViewSet):
    model = models.Article
    serializer_class = serializers.ArticleSerializer

    def get_queryset(self):
        return super(ArticleViewSet, self).get_queryset()\
            .select_related('categories')\
            .order_by('published')

    def create(self, request, *args, **kwargs):
        request.DATA['author'] = request.user.id
        return super(ArticleViewSet, self).create(request, *args, **kwargs)
