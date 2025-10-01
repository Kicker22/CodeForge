# This file will cover the basics of integers in Python at the CS fundamentals level.
# Integers are whole numbers, both positive and negative, including zero.
# They do not have a fractional or decimal component.
# In Python, integers are of unlimited size, limited only by the available memory of the system.

# Here are some examples of integers in Python:
a = 10          # A positive integer
b = -5          # A negative integer
c = 0           # Zero is also an integer
large_number = 12345678901234567890  # A very large integer

# You can perform various arithmetic operations with integers:
sum_result = a + b          # Addition
difference = a - b          # Subtraction
product = a * b             # Multiplication
quotient = a // 3           # Integer division (floor division)
remainder = a % 3           # Modulus (remainder of division)
power = a ** 2              # Exponentiation

# Python also supports bitwise operations on integers:
bitwise_and = a & b         # Bitwise AND
bitwise_or = a | b          # Bitwise OR
bitwise_xor = a ^ b         # Bitwise XOR
left_shift = a << 1         # Left shift
right_shift = a >> 1        # Right shift

# You can convert other data types to integers using the int() function:
float_to_int = int(3.7)     # Converts float to integer (truncates decimal part)
str_to_int = int("42")      # Converts string to integer
# Note: Converting a string that does not represent a valid integer will raise a ValueError
# Example:
invalid_str_to_int = int("hello")  # This will raise a ValueError

# Integers can be used in various contexts, such as indexing lists, controlling loops, and more.
# They are a fundamental part of programming in Python.

# Here are some examples of using integers in different contexts:
# Example 1: Using integers in a loop
for i in range(5):  # Looping from 0 to 4
    print(i)

# Example 2: Using integers as list indices
my_list = ['a', 'b', 'c', 'd']
first_element = my_list[0]  # Accessing the first element
print(first_element)

# Example 3: Using integers in conditional statements
if a > b:
    print("a is greater than b")
else:
    print("a is not greater than b")

# Example 4: Using integers in functions
def add_numbers(x, y):
    return x + y
result = add_numbers(3, 7)  # Calling the function with integers
print(result)

# This file provides a comprehensive overview of integers in Python, covering their definition, operations, and usage in various contexts.
