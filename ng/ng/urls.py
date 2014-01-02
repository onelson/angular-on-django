import os
from django.conf import settings
from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django.contrib import admin
from django.views.generic import TemplateView

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    # the articles app provides REST API content from api/ - we could have an
    # article-specific prefix here if we want, but for this example the api
    # will be at /api/...
    url(r'^', include('articles.urls')),
    # This view bootstraps the angular app
    url(r'^$', TemplateView.as_view(template_name='index.html'))
)


if settings.DEBUG:
    # Note that any dir names added here may need to have some characters
    # escaped since they are getting dropped into a regex.
    __ng_app_static_dirs = (
        'bower_components',
        'images',
        'scripts',
        'styles',
        'views'
    )

    urlpatterns += patterns(
        '',
        url(r'^(?P<path>((favicon\.ico|robots\.txt)|'
            r'(%s)/.*))$' % '|'.join(__ng_app_static_dirs),
            'django.views.static.serve',
            {'document_root': os.path.join(
                settings.BASE_DIR,
                'ng',
                'client-src',
                'app', )})
    )

    urlpatterns += staticfiles_urlpatterns()