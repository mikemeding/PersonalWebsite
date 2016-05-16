from blog.models import BlogPost, ResumeItem
from rest_framework import serializers


class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('title', 'description', 'content', 'published', 'created')


class ResumeItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ResumeItem
        fields = ('title', 'content', 'published', 'section', 'date')
