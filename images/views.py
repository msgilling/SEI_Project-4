from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Image
from .serializers import ImageSerializer, PopulatedImageSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.

class ImageListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def get(self, _request):
        # get all images from the database
        images = Image.objects.all()
        # print("*** IMAGES *** ->", images) # return a queryset which needs to be converted
        # next serialize the response to convert into python
        serialized_images = PopulatedImageSerializer(images, many=True)
        # print("*** SERIALIZED IMAGES ***", serialized_images)
        # now return the response as JSON
        return Response(serialized_images.data, status=status.HTTP_200_OK)
    
    # post/create an image
    def post(self, request):
        request.data['owner'] = request.user.id
        image = ImageSerializer(data = request.data)
        if image.is_valid():
            image.save()
            return Response(image.data, status=status.HTTP_201_CREATED)
        else:
            return Response(image.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class ImageDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def get(self, _request, pk):
        image = Image.objects.get(id=pk)
        # print('*** SELECTED IMAGE ***', image)
        serialized_image = PopulatedImageSerializer(image)
        return Response(serialized_image.data, status=status.HTTP_200_OK)

    # deleting an image
    def delete(self, _request, pk):
        try:
            image = Image.objects.get(id=pk)
            image.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    # updating an image
    def put(self, request, pk):
        image = Image.objects.get(id=pk)
        updated_image = ImageSerializer(image, data=request.data)
        if updated_image.is_valid():
            updated_image.save()
            return Response(updated_image.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_image.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
