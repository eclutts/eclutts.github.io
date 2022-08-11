from django.shortcuts import render

# Create your views here.

def fathers_day(request):
    return render(request, 'happy-fathers-day.html')