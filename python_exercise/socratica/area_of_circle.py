#!/usr/bin/env python3
"""
    Module implementing a functin that computes area of a
    circle

"""
from math import pi


def circle_area(r: int) -> float:
    """Computes the area of circle for given radius"""
    if type(r) not in [int, float]:
        raise TypeError("Radius must be an integer or float")
    if r < 0:
        raise ValueError("Radius cannot be negative")
    return pi * (r ** 2)
