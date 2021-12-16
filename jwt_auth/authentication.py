from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings # for the secret key
import jwt
User = get_user_model()

class JWTAuthentication(BasicAuthentication):
    def authenticate(self, request):
        # ge the token from the request
        header = request.headers.get('Authorization')
        
        # if not token in the header, return none
        if not header:
            return None

        if header.startswith('Basic'): # Add this line in
            return None

            # if the toke is in the incorrect format, throw an error with raise
        if not header.startswith('Bearer'):
            raise PermissionDenied({'message': 'Invalid authorization header'})

        # if token does start with Bearer, need to remove and replace with empty string
        token = header.replace('Bearer ', '')
        try:
            
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))
            # use 'sub' from the payload to search the DB for matching user
        except jwt.exceptions.InvalidTokenError: # if token is invalid/issue with decoding -> throw an error
            raise PermissionDenied({'message': 'Invalid Token ⛔️'})
        except User.DoesNotExist: # issue with finding the user -> throw an error
            raise PermissionDenied({'message': 'User not found 😰'})
        return (user, token)