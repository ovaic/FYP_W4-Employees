from django.db import models
from Registration.models import Employee
from datetime import datetime
# Create your models here.
class Activity(models.Model):
    actname = models.CharField(max_length=50,primary_key=True,default='activity')
    enabled = models.BooleanField(default=True)

    def __str__(self):
        return self.actname

class Zone(models.Model):
    zone_name = models.CharField(max_length=10, primary_key=True)
    description = models.CharField(max_length=30, null= True)

class Policy(models.Model):
    INTENSITY = [
        ('High','Critical Violations'),
        ('Medium','Medium Violations'),
        ('Low','Non-Critical Violations')
    ]   
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    insensity = models.CharField(max_length=30, choices=INTENSITY)
    zone = models.ForeignKey(Zone, on_delete=models.CASCADE,null=True)
    duration = models.PositiveIntegerField(null=True)
    isallowed = models.BooleanField(default=False)
    enabled = models.BooleanField(default=True)

class Camera(models.Model):
    description = models.CharField(max_length=30, default=None)
    zone = models.ForeignKey(Zone, on_delete=models.CASCADE,)

class Violations(models.Model):
    person_id = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    policy_id = models.ForeignKey(Policy, on_delete=models.CASCADE)
    zone = models.ForeignKey(Zone, on_delete=models.CASCADE,null=True)
    start_time = models.CharField(max_length=20, default=datetime.now().strftime("%H:%M:%S"))
    end_time = models.CharField(max_length=20, default=datetime.now().strftime("%H:%M:%S"))
    date = models.DateTimeField(auto_now_add=True)
 