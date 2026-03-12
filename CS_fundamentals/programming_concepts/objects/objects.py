# lets explore obects in python

# an object is an instance of a class, and a class is a blueprint for creating objects.
# we can create a class called Person, and then create an object of that class called person1
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# we can create an object of the Person class
person1 = Person("John", 30)
print(person1.name)  # Output: John
print(person1.age)   # Output: 30   

# we can also create another object of the Person class
person2 = Person("Jane", 25)
print(person2.name)  # Output: Jane
print(person2.age)   # Output: 25

# we can also add methods to our class, which are functions that belong to the class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."
    
person1 = Person("John", 30)
print(person1.greet())  # Output: Hello, my name is John and I am 30 years old.

# here is a real-world example of a class called Car, which has attributes like make, model, and year, and a method called start_engine
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The {self.year} {self.make} {self.model}'s engine has started."
    
car1 = Car("Toyota", "Camry", 2020)
print(car1.start_engine())  # Output: The 2020 Toyota Camry's engine has started.

# In the real world we can have many different types of cars, and each car can be an object of the Car class. We can create multiple car objects with different attributes and call the start_engine method on each of them to see the output.
# we use objects to represent real-world entities in our code, and they allow us to organize our code in a way that is easy to understand and maintain.
# we can also use inheritance to create a new class that is a child of the Car class, and it will inherit all the attributes and methods of the Car class. For example, we can create a class called ElectricCar that inherits from the Car class, and it will have an additional attribute called battery_capacity and a method called charge_battery.

class ElectricCar(Car):
    def __init__(self, make, model, year, battery_capacity):
        super().__init__(make, model, year)
        self.battery_capacity = battery_capacity

    def charge_battery(self):
        return f"The {self.year} {self.make} {self.model}'s battery is charging."
    
electric_car1 = ElectricCar("Tesla", "Model 3", 2021, "75 kWh")
print(electric_car1.start_engine())  # Output: The 2021 Tesla Model