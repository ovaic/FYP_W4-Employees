from django.urls import path
from . import views

# URL Config
urlpatterns = [
    path("all-activity/", views.all_activity),
    path("activity/<str:pk>/", views.activity_detail),
    path("new-activity/", views.create_activity),
    path("all-zone/", views.all_zone),
    path("zone/<str:pk>/", views.zone_detail),
    path("new-zone/", views.create_zone),
    path("all-camera/", views.all_camera),
    path("camera/<str:pk>/", views.camera_detail),
    path("new-camera/", views.create_camera),
    path("all-policy/", views.all_policy),
    path("policy/<str:pk>/", views.policy_detail),
    path("new-policy/", views.create_policy),
    path("policy-by-activity/<str:pk>/", views.policy_by_activity),
    path("all-violations/", views.all_violations),
    path("new-violation/", views.create_violation),
    path("violation/<str:pk>/", views.violation_detail),
    path("violations-by-activity/<str:activity>/", views.violations_by_activity),
    path("violations-by-person/<str:person_id>/", views.violations_by_person),
    path("violations-by-zone/<str:zone>/", views.violations_by_zone),
    path("search-violations/<str:search>/", views.search_violations)
    
]