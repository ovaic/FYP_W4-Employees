from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Activity, Policy, Violations, Zone, Camera
from .serializers import ActivitySerializer, PolicySerializer, ViolationsSerializer, ZoneSerializer, CameraSerializer

# Create your views here.
# Activity Views
@api_view(['GET'])
def all_activity(request):
    activity = Activity.objects.all()
    serializer = ActivitySerializer(activity, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_activity(request):
    serializer = ActivitySerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def activity_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        activity = Activity.objects.get(pk=pk)
    except Activity.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ActivitySerializer(activity, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ActivitySerializer(activity, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        activity.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Zone Views
@api_view(['GET'])
def all_camera(request):
    camera = Camera.objects.all()
    serializer = CameraSerializer(camera, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_camera(request):
    serializer = CameraSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE']  )
def camera_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        camera = Camera.objects.get(pk=pk)
    except Camera.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CameraSerializer(camera, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CameraSerializer(camera, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        camera.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Zone Views
@api_view(['GET'])
def all_zone(request):
    zone = Zone.objects.all()
    serializer = ZoneSerializer(zone, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_zone(request):
    serializer = ZoneSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def zone_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        zone = Zone.objects.get(pk=pk)
    except Zone.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ZoneSerializer(zone, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ZoneSerializer(zone, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        zone.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Policy Views
@api_view(['GET'])
def all_policy(request):
    policy = Policy.objects.all()
    serializer = PolicySerializer(policy, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_policy(request):
    serializer = PolicySerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response('Error')
@api_view(['GET', 'PUT', 'DELETE'])
def policy_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        policy = Policy.objects.get(pk=pk)
    except Policy.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PolicySerializer(policy, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PolicySerializer(policy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        policy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def policy_by_activity(request, pk):
    print(pk)
    try:
        policy = Policy.objects.filter(activity=pk)
    except Policy.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = PolicySerializer(policy, many=True)
    return Response(serializer.data)

# Violation Views
@api_view(['GET'])
def all_violations(request):
    violation = Violations.objects.all().order_by('-id')
    serializer = ViolationsSerializer(violation, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_violation(request):
    serializer = ViolationsSerializer(data = request.data)
    print(request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def violation_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        violation = Violations.objects.get(pk=pk)
    except Violations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ViolationsSerializer(violation, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ViolationsSerializer(violation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        violation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def search_violations(request, search):
    try:
        violation = Violations.objects.all()
    except Violations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = ViolationsSerializer(violation, many=True)
    violations = []
    print(serializer.data)
    for violation in serializer.data:
        if violation['activity'].lower() == search.lower() or violation['zone'].lower() == search.lower():
            violations.append(violation)
    return Response(violations)


@api_view(['GET'])
def violations_by_activity(request, activity):
    try:
        violation = Violations.objects.filter(activity=activity)
    except Violations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = ViolationsSerializer(violation, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def violations_by_person(request, person_id):
    try:
        violation = Violations.objects.filter(person_id=person_id)
    except Violations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = ViolationsSerializer(violation, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def violations_by_zone(request, zone):
    try:
        violation = Violations.objects.filter(zone=zone)
    except Violations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = ViolationsSerializer(violation, many=True)
    return Response(serializer.data)