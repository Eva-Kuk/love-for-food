from django.shortcuts import render, get_object_or_404
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


def vendor_detail(request, vendor_slug):
    vendor = get_object_or_404(Vendor, vendor_slug=vendor_slug)
    
    context = {
        'vendor':vendor,
    }
    return render(request, 'marketplace/vendor_detail.html', context)
