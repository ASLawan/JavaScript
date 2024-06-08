#!/usr/bin/env python3

def print_pattern(num: int) -> int:
    """Returns triangle pattern"""
    i = 1

    while i <= num:
        print(" " * (num - i), end="")
        print(i, end="")
        j = 1

        while j < i:
            print(i, end="")
            j += 1
        print(i + 1)
        i += 1



print_pattern(8)

