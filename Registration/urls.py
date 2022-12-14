from django.urls import path
from . import views

# URL Config
urlpatterns = [
    path("all-employee/", views.all_employees),
    path("employee/<str:pk>/", views.employee_detail),
    path("new-employee/", views.create_employee),
    path("all-role/", views.all_role),
    path("role/<str:pk>/", views.role_detail),
    path("new-role/", views.create_role)
    
]