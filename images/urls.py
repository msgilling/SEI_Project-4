from django.urls import path
from . import views
from .views import ImageListView
from .views import ImageDetailView

urlpatterns = [
    path('', ImageListView.as_view()),
    path('<int:pk>/', ImageDetailView.as_view())
    
]