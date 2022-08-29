from vendor.models import Vendor

def get_vendor(request):
    vendor = Vendor.objects.get(user=request.user)
    return dict(vendor=vendor)