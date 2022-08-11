from django.shortcuts import render

# Create your views here.

def home_page(request):
    context = {"apps": "fathers_day"}
    return render(request, 'github/index.html', context)