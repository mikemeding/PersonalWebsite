from blog.models import ResumeItem, BlogPost
from rest_framework import viewsets
from blog.serializers import BlogPostSerializer, ResumeItemSerializer


class BlogPostViewSet(viewsets.ModelViewSet):
    '''
    API endpoint which allows us to view and edit blog posts
    '''
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer


class ResumeItemViewSet(viewsets.ModelViewSet):
    '''
    API endpoint which allows us to view and edit resume items
    '''
    queryset = ResumeItem.objects.all()
    serializer_class = ResumeItemSerializer
