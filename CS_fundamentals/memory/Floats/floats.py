# Lets explort the basics of floating point numbers
# and how they are represented in memory.   

# A floating point number (or float) is a number that has a decimal point.
# In Python, floats are represented using the built-in float type.
# For example:
float_a = 3.14
float_b = 2.0
float_c = -0.001

# You can check the type of a float
print(type(float_a))  # Output: <class 'float'>
print(type(float_b))  # Output: <class 'float'>
print(type(float_c))  # Output: <class 'float'>

# Floats are stored in memory using the IEEE 754 standard.
# This standard represents floats using three components:
# 1. Sign bit: 1 bit that indicates whether the number is positive or negative
# 2. Exponent: 8 bits that represent the exponent (power of 2
# 3. Mantissa (or significand): 23 bits that represent the significant digits of the number
# This allows for a wide range of values, but also introduces some limitations.

# For example, not all decimal fractions can be represented exactly as floats.
# This can lead to precision errors in calculations.

# For example:
result = 0.1 + 0.2
print(result)  # Output: 0.30000000000000004 (not exactly 0.3)
# This is because 0.1 and 0.2 cannot be represented exactly as floats in binary.
# To mitigate precision errors, you can use the round() function to round the result to a specific number of decimal places.
rounded_result = round(result, 2)
print(rounded_result)  # Output: 0.3

# You can also use the decimal module for more precise decimal arithmetic.
from decimal import Decimal
decimal_a = Decimal('0.1')
decimal_b = Decimal('0.2')
decimal_result = decimal_a + decimal_b
print(decimal_result)  # Output: 0.3 (exactly)

# In summary, floats are used to represent real numbers with decimal points,
# but they have limitations due to their binary representation in memory.
# Be aware of precision errors and consider using rounding or the decimal module for more accurate calculations.