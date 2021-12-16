from rest_framework import serializers
from .models import Image
from comments.serializers import CommentSerializer

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class PopulatedImageSerializer(ImageSerializer):
    # comments = CommentSerializer(many=True)
    # class Meta:
    #     model: Image
    #     field = '__all__'

    
    comment_set = CommentSerializer(read_only=True, many=True)