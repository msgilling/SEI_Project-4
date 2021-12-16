from django.urls import path
from . import views
from .views import AffirmationDetailView
from .views import AffirmationListView

urlpatterns = [
    path('<int:pk>/', AffirmationDetailView.as_view()),
    path('', AffirmationListView.as_view()),
]