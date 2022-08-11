from django.urls import path

from . import views

appname = 'home'
urlpatterns = [
    path('', views.home_page, name='home'),
]