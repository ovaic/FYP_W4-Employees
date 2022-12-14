#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import threading
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'W4Employee.settings')
from System_loop import system_loop
import time
import multiprocessing
 
SEQUENCE_LENGTH = 20
def main():
    """Run administrative tasks."""
    # os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'W4Employee.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

def fun():
    for i in range(100):
        time.sleep(1)
        print(i*i)


if __name__ == '__main__':
    # system_loop(SEQUENCE_LENGTH)
    t2 = multiprocessing.Process(target=system_loop, args=(SEQUENCE_LENGTH,))
    t2.start()
    main()
    # # t1 = multiprocessing.Process(target=main)
    
    # # t1.start()
    # # starting thread 2
    
 
    t2.join()
    # wait until thread 1 is completely executed
    # t1.join()
        # wait until thread 2 is completely executed
    
    # os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'W4Employee.settings')
    # system_loop(SEQUENCE_LENGTH)