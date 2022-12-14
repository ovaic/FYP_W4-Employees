# Generated by Django 4.1.2 on 2022-11-28 15:41

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Registration', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('actname', models.CharField(default='activity', max_length=50, primary_key=True, serialize=False)),
                ('enabled', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Policy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('insensity', models.CharField(choices=[('High', 'Critical Violations'), ('Medium', 'Medium Violations'), ('Low', 'Non-Critical Violations')], default='Medium', max_length=30)),
                ('duration', models.PositiveIntegerField(null=True)),
                ('isallowed', models.BooleanField(default=False)),
                ('enabled', models.BooleanField(default=True)),
                ('activity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Violations.activity')),
            ],
        ),
        migrations.CreateModel(
            name='Zone',
            fields=[
                ('zone_name', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('description', models.CharField(default=None, max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Violations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.TimeField(default=datetime.datetime(2022, 11, 28, 20, 41, 24, 502966))),
                ('end_time', models.TimeField(default=datetime.datetime(2022, 11, 28, 20, 41, 24, 502966))),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('activity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Violations.activity')),
                ('person_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Registration.employee')),
                ('policy_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Violations.policy')),
                ('zone', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Violations.zone')),
            ],
        ),
        migrations.AddField(
            model_name='policy',
            name='zone',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Violations.zone'),
        ),
        migrations.CreateModel(
            name='Camera',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default=None, max_length=30)),
                ('zone', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Violations.zone')),
            ],
        ),
    ]