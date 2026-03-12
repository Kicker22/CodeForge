# in theis file we will talk about methods in python

# methods are functions that are associated with an object. They are defined within a class and can be called on instances of that class.

# for example, let's say we have a class called "Person" and we want to define a method called "greet" that will print a greeting message when called.
class Person: 
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, my name is {self.name}!")

# now we can create an instance of the Person class and call the greet method on it.
person1 = Person("Alice")
person1.greet()  # Output: Hello, my name is Alice!

# we can also create another instance of the Person class and call the greet mmethod on it. 

person2 = Person("Bob")
person2.greet()  # Output: Hello, my name is Bob!

# methods can also take parameters, just like regular functions. For example, we can modify the greet method to take a parameter for the greeting message.

class Person: 
    def __init__(self, name):
        self.name = name

    def greet(self, greeting):
        print(f"{greeting}, my name is {self.name}!")
# now we can call the greet method with a custom greeting message.
person1 = Person("Alice")
person1.greet("Hi")  # Output: Hi, my name is Alice!

person2 = Person("Bob")
person2.greet("Hello")  # Output: Hello, my name is Bob!
# in summary, methods are functions that are associated with an object and can be called on instances of a class. They can take parameters and perform actions based on the state of the object.

# Why use methods?
# methods allow us to define behavior for our objects. They can manipulate the data stored in the object and perform actions based on that data. 
# This helps us to organize our code and make it more modular and reusable. By using methods, we can also encapsulate functionality within a class, making it easier to maintain and update our code in the future.

# In addition, methods can also be used to implement inheritance and polymorphism in object-oriented programming. This allows us to create subclasses that inherit behavior from a parent class and override or extend that behavior as needed. Overall, methods are an essential part of object-oriented programming and play a crucial role in defining the behavior of our objects.

#for example we can create a parent class called "Animal" and define a method called "speak" that will be overridden by subclasses.
class Animal:
    def speak(self):
        print("The animal makes a sound.")
    #lets add another method called "move" that will be inherited by subclasses.
    def move(self):
        print("The animal moves.")

# now lets make a subclass called "Dog" that inherits from the Animal class and overrides the speak method.
class Dog(Animal):
    # we can override the speak method to provide a specific implementation for dogs.
    def speak(self):
        print("The dog barks.")
    # dont need to override the move method since it will be inherited from the Animal class.

# now we can create an instance of the Dog class and call the speak method on it.
dog1 = Dog()
dog1.speak()  # Output: The dog barks!  
dog1.move()   # Output: The animal moves.

# lets make this more complicated by adding another subclass called "Cat" that also inherits from the Animal class and overrides the speak method.
class Cat(Animal):
    def speak(self):
        print("The cat meows.")

cat1 = Cat()
cat1.speak()  # Output: The cat meows!

# so why do this ? 
# By using inheritance and method overriding, we can create a hierarchy of classes that share common behavior while allowing for specific implementations in subclasses. This promotes code reuse and makes it easier to maintain and extend our code in the future.
 
class Bird(Animal):
    def speak(self):
        print("The bird chirps.")
    # birds dont move the same way as other animals, so we can override the move method to provide a specific implementation for birds.
    def move(self):
        print("The bird flies.")   
bird1 = Bird()
bird1.speak()  # Output: The bird chirps!
bird1.move()   # Output: The bird flies.    
