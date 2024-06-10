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


def print_ages(min_time, max_time):
    for _ in ages:
        print(random.randint(30, 35))
        time.sleep(random.uniform(min_time, max_time))

# print_names()
# print_ages()

# instantiate threads

t1 = threading.Thread(target=print_names)
t2 = threading.Thread(target=print_ages, args=(0.2, 1))

# start the threading process
t1.start()
t2.start()

# end threading process

t1.join()
t2.join()
