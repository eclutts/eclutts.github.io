from django.urls import path

from . import views

appname = 'fathers_day'
urlpatterns = [
    path('', views.fathers_day, name='fathersday'),
]