from django.shortcuts import render

from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Affirmation
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from .serializers import AffirmationSerializer


class AffirmationDetailView(APIView):
   # GET SINGLE AFFIRMATION
    def get(self, _request, pk):
        affirmation = Affirmation.objects.get(id=pk)
        serialized_affirmation = AffirmationSerializer(affirmation)
        return Response(serialized_affirmation.data,status=status.HTTP_200_OK)

class AffirmationListView(APIView):
    # GET ALL AFFIRMATIONS
    def get(self, _request):
        affirmations = Affirmation.objects.all()
        serialized_affirmations = AffirmationSerializer(affirmations, many=True)
        return Response(serialized_affirmations.data, status=status.HTTP_200_OK)