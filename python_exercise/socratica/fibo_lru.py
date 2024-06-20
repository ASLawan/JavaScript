#!/usr/bin/env python3
"""
    Module with function implementing fibonacci series
    function improved with lru decorator
"""
from functools import lru_cache


@lru_cache(maxsize = 1000)
def fibonacci(n: int) -> int:
    """Returns the fibonacci series upto given number"""
    if n == 1:
        return 1
    elif n == 2:
        return 2
    elif n > 2:
        return fibonacci(n-1) + fibonacci(n-2)


for n in range(1, 101):
    print(f"{n}: {fibonacci(n)}")
