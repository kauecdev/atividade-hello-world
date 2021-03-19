from django.shortcuts import render
from django.http import HttpResponse

def helloWorld(request):
  return HttpResponse("Hello World in Django!\nBy: Kauê Cavalcante" )

# Create your views here.
