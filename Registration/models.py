from django.core.files.storage import FileSystemStorage
from django.db import models

fs = FileSystemStorage(location='/media/photos')


# Create your models here.

class Role(models.Model):
    # ROLES = (
    #     ('User','Simple User'),
    #     ('Super','Super User'),
    #     ('Admin','System Admin')
    # )
    name = models.CharField(max_length=10,primary_key=True)
    salary = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class Employee(models.Model):
    full_name = models.CharField(max_length=100,null=False)
    cnic = models.CharField(max_length=15,null=False)
    email = models.EmailField(max_length=30,null=False)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    imgs = models.ImageField(storage=fs)

    def __str__(self):
        return self.full_name