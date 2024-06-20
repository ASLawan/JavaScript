#!/usr/bin/env python3
""" 
    test area of circle function

"""

circle_area = __import__('area_of_circle').circle_area

radii = [3, 4, 5, 9, 'Austin']

for radius in radii:
    print(f"Area of circle with radius {radius} is {circle_area(radius):.2f}")
    print('')
