from django.db import models


class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    content = models.TextField()
    published = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def __unicode__(self):
        return u'%s' % self.title

    def __str__(self):
        return self.title  # use title as the item name in admin interface


class ResumeItem(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    published = models.BooleanField(default=True)
    section = models.CharField(max_length=255)
    date = models.CharField(max_length=255)

    def __str__(self):
        return self.title  # use title as the item name in admin interface
