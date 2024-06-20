#!/usr/bin/env python3
"""
    Module implementing fibonaci series with memoization

"""


fibonacci_cache = {}

def fibonacci(n: int) -> int:
    """Returns the fibnomacci series"""
    if n in fibonacci_cache:
        return fibonacci_cache[n]

    if n == 1:
        value = 1

    elif n == 2:
        value = 2

    elif n > 2:
        value = fibonacci(n-1) + fibonacci(n-2)

    fibonacci_cache[n] = value

    return value



for n in range(1, 101):
    print(f"{n}: {fibonacci(n)}")
