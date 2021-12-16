from django.shortcuts import render


# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from .serializers import UserSerializer
from django.http.response import HttpResponse
from rest_framework import status 
from .serializers import PopulatedUserSerializer
User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        print("*** request is hitting the right view *****")
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'})

        return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def post(self, request):
        print("*** request is hitting the right view *****")
        email = request.data.get('email')
        password = request.data.get('password')

        user = self.get_user(email)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})

        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}!'})

class UserDetailView(APIView):
    # GET single user
    def get(self, request, pk):
        user = User.objects.get(id=pk)
        userinfo = user.Uploads.all()
        print(" *** userinfo *** ", userinfo)
        serialized_user = PopulatedUserSerializer(user)

        print("*** user request hitting right view ***")
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    # EDIT user
    def put(self, request, pk):
        user = User.objects.get(id=pk) 
        updated_user = UserSerializer(user, data=request.data)
        if updated_user.is_valid():
            updated_user.save()
            return Response(updated_user.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # DELETE user
    def delete(self, request, pk):
        try:
            user = User.objects.get(id=pk)
            user.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)