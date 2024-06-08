#!/usr/bin/env python3

def print_pattern(num: int) -> int:

    i = 1

    while i <= num:
        print(i, end="")
        j = 1
        while j < i:
            print(i, end="")
            j += 1
        print(i + 1)
        i += 1


print_pattern(8)
