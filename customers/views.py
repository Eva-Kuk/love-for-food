from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from accounts.forms import UserProfileForm, UserInfoForm

@login_required(login_url='login')
def cprofile(request):
    profile_form = UserProfileForm()
    user_form = UserInfoForm()
    
    context = {
        'profile_form': profile_form,
        'user_form': user_form,
    }
    return render(request, 'customers/cprofile.html', context)
