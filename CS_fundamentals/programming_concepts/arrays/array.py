# In this file we will learn about arrays in python
# An array is a collection of items stored at contiguous memory locations.

# Example of an array in python
my_array = [1,2,3,4,5]

# We can access the elements of the array using their index
print(my_array[0]) # Output: 1
print(my_array[1]) # Output: 2
print(my_array[2]) # Output: 3
print(my_array[3]) # Output: 4
print(my_array[4]) # Output: 5

# We can also modify the elements of the array
my_array[0] = 10
print(my_array) # Output: [10, 2, 3, 4, 5]

# We can also add new elements to the array
my_array.append(6)
print(my_array) # Output: [10, 2, 3, 4, 5, 6]

# We can also remove elements from the array
my_array.remove(2)
print(my_array) # Output: [10, 3, 4, 5, 6]

# We can also find the length of the array
print(len(my_array)) # Output: 5 

# We can also itterate through the array using a for loop
for element in my_array: 
    print(element)
# Output: 10
#         3
#         4
#         5
#         6 

# so what do we use arrays for? 
# Arrays are used to store multiple values in a single variable.
# They are also used to store data in a structured way, such as in a list or a table.
# They are also used to perform various operations on the data, such as sorting, searching, and manipulating the data.

#lets see this in action with a real world example. 

# Example: A student management system that stores the names of students in an array and allows us to perform various operations on the data.

students = ["Alice", "Bob", "Charlie", "David", "Eve"]

# we can access the names of the students using their index

print(students[0]) # Output: Alice
print(students[1]) # Output: Bob
print(students[2]) # Output: Charlie
print(students[3]) # Output: David
print(students[4]) # Output: Eve    

#but this is not very efficient, what if we want to find the name of a student who is not in the list?
# we can use the in keyword to check if a student is in the list

print("Alice" in students) # Output: True
print("Frank" in students) # Output: False

# in real life we would use a database to store the data, but for the sake of this example we will use an array.

#arrays are also used to store data in a structured way, such as in a list or a table.
# we can use a list of lists to store the data in a structured way

students = [["Alice", 20], ["Bob", 21], ["Charlie", 22], ["David", 23], ["Eve", 24]]

# we can access the names and ages of the students using their index

print(students[0][0]) # Output: Alice

# or more efficiently we can use a for loop to access the data
for student in students:
    print(f"Name: {student[0]}, Age: {student[1]}")
# Output:
# Name: Alice, Age: 20
# Name: Bob, Age: 21
# Name: Charlie, Age: 22
# Name: David, Age: 23
# Name: Eve, Age: 24

# now what if I want to combine arrays?
# we can use the + operator to combine two arrays
array1 = [1, 2, 3]
array2 = [4, 5, 6]  
combined_array = array1 + array2
print(combined_array) # Output: [1, 2, 3, 4, 5, 6]

# what if I want to find the common elements between two arrays? 
# we can use the set data structure to find the common elements between two arrays
array1 = [1, 2, 3, 4, 5]
array2 = [4, 5, 6, 7, 8]
common_elements = set(array1) & set(array2)
print(common_elements) # Output: {4, 5}

# what if I want to find the unique elements between two arrays?
unique_elements = set(array1) ^ set(array2)
print(unique_elements) # Output: {1, 2, 3, 6, 7, 8}


