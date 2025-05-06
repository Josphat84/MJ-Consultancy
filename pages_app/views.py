from django.shortcuts import render

# Create your views here.
def home_page_view(request):
    return render(request, 'home.html')

def about_page_view(request):
    return render(request, 'about.html')

def services_page_view(request):
    return render(request, 'services.html')

def case_studies_page_view(request):
    return render(request, 'case_studies.html')

def testimonials_page_view(request):
    return render(request, 'testimonials.html')

def resources_page_view(request):
    return render(request, 'resources.html')

def blog_page_view(request):
    return render(request, 'blog.html')

def contact_page_view(request):
    return render(request, 'contact.html')

def shop_page_view(request):
    return render(request, 'shop.html')

def booking_page_view(request):
    return render(request, 'booking.html')

def regions_page_view(request):
    return render(request, 'regions.html')
