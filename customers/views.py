from django.shortcuts import render

def cprofile(request):
    return render(request, 'customers/cprofile.html')
