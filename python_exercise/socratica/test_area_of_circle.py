#!/usr/bin/env python3
"""
    Module implementing test cases for the area of circle
    function

"""
from unittest import TestCase
from area_of_circle import circle_area
from math import pi


class TestCircleArea(TestCase):
    """Tests various input values on the circle_area function"""

    def test_area(self):
        """Test for positive integers and floats"""
        self.assertAlmostEqual(circle_area(1), pi)
        self.assertAlmostEqual(circle_area(0), 0)
        self.assertAlmostEqual(circle_area(2.1), pi * 2.1 ** 2)

    def test_type(self):
        """Tests the type of input to circle_area"""
        self.assertRaises(TypeError, circle_area, 'Austin')
        self.assertRaises(TypeError, circle_area, 3+5j)
        self.assertRaises(TypeError, circle_area, True)

    def test_value(self):
        """Tests the value of the input to circle_area"""
        self.assertRaises(ValueError, circle_area, -2)
