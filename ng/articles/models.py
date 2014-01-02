from django.db import models


class Category(models.Model):
    title = models.TextField(max_length=80)
    slug = models.SlugField(unique=True)

    def __unicode__(self):
        return self.title

    __str__ = __unicode__

    def __repr__(self):
        return '<Category %d: %s>' % (self.pk, self.slug)


class Article(models.Model):
    author = models.ForeignKey('auth.User', related_name='articles')
    body = models.TextField()
    categories = models.ManyToManyField(Category, related_name='articles')
    published = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=200, unique=True)
    title = models.CharField(max_length=200)

    def __unicode__(self):
        return self.title

    __str__ = __unicode__

    def __repr__(self):
        return '<Article %d: %s>' % (self.pk, self.slug)
