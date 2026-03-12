#lets explore functions in Python. A function is a block of reusable code that performs a specific task.
#  Functions allow us to break down our code into smaller, more manageable pieces, making it easier to read and maintain.

# they differ from methods in that they are not associated with an object and can be called independently.
# for example, we can define a simple function that takes two numbers as parameters and returns their sum.

def add_numbers(num1, num2):
    return num1 + num2

# now we can call the function and pass in two numbers to get their sum.
result = add_numbers(5, 3)
print(result)  # Output: 8

# we can also define a function that takes no parameters and simply prints a message.
def greet(): 
    print("Hello, welcome to python functions!")

# we can pass in arrays as parameters to functions as well
numbers = [1, 2, 3, 4, 5]

def sum_arryay(arr):
    total = 0
    for num in arr: 
        total += num
    return total

result = sum_arryay(numbers)
print(result)  # Output: 15

# lets get fancy and define a function that takes a variable number of arguments using the *args syntax.
# *args allows us to pass in a var number of args to a function, which will be treated as a tuple within the function
def multiply_numbers(*args):
    result = 1
    for num in args:
        result *= num
    return result
result = multiply_numbers(2, 3, 4)
print(result)  # Output: 24

# we can also use the **kwargs syntax to pass in a variable number of keyword arguments, which will be treated as a dictionary within the function.
def print_person_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_person_info(name="John", age=30, city="New York")
# Output:
# name: John
# age: 30
# city: New York
# in summary, functions are a fundamental building block of programming that allow us to break down our code into smaller, reusable pieces. They can take parameters, return values, and be called independently of any object. Functions are essential for writing clean, efficient, and maintainable code in Python.