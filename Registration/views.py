from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Employee, Role
from .serializers import EmployeeSerializer, RoleSerializer

# Create your views here.
# Employee Views
@api_view(['GET'])
def all_employees(request):
    employee = Employee.objects.all()
    serializer = EmployeeSerializer(employee, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_employee(request):
    serializer = EmployeeSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def employee_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        employee = Employee.objects.get(pk=pk)
    except employee.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EmployeeSerializer(employee, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Role Views
@api_view(['GET'])
def all_role(request):
    role = Role.objects.all()
    serializer = RoleSerializer(role, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_role(request):
    serializer = RoleSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def role_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        role = Role.objects.get(pk=pk)
    except role.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoleSerializer(role, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RoleSerializer(role, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        role.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)