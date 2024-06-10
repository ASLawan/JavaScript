#!/usr/bin/env python3
import time
import threading
import random

names = ["Austin", "Desmond", "Kingsley", "Patrick", "Thelma", "Joel", "Capwell"]

ages = range(7)

def print_names():
    for name in names:
        print(name)
        time.sleep(random.uniform(0.5, 1.5))


def print_ages():
    for _ in ages:
        print(random.randint(30, 35))
        time.sleep(random.uniform(0.5, 1.5))

print_names()
print_ages()
