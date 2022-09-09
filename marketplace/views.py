from django.shortcuts import render
from vendor.models import Vendor

def marketplace(request):
    vendors = Vendor.objects.filter(is_approved=True, user__is_active=True)
    # counter rate
    vendor_count = vendors.count()
    context = {
        'vendors': vendors, 
        'vendor_count': vendor_count,
    }
    return render(request, 'marketplace/listing.html', context)
