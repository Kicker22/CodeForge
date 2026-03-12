# we are going to code an app that allows us to create a simple to-do list.
#  We will use a class called ToDoList to represent our to-do list, and we will create methods to add tasks, remove tasks, and display the tasks in the list.
# we will use the cs fundemanetals dir as refrence to buid out todo list app
#first we need to define a class that will represent our to-do list

class ToDoList: 
    # we will use a list to store our tasks
    def __init__(self):
        self.tasks = []
    # we will create a method to add tasks to our to-do list
    def add_task(self, task): 
        #we use self so it knows we are referring to the instance of the class
        self.tasks.append(task)

    # we will create a method to remove tasks from our to-do list
    def remove_task(self, task):
        if task in self.tasks:
            self.tasks.remove(task)
        else:
            print(f"Task '{task}' not found in the to-do list.")

    # we will create a method to display the tasks in our to-do list
    def display_tasks(self):
        if not self.tasks: 
            print("Your to-do list is empty.")
        else:
            print("Your to-do list:")
            for task in self.tasks:
                print(f"- {task}")

# how do we display this in a usable way? 
# we can use a simple command-line interface to interact with our to-do list. 
# We can create a loop that allows the user to enter commands to add, remove, and display tasks.

def main(): 
    my_todo_list = ToDoList()
    while True:
        command = input("Enter a command (add, remove, display, quit): ")
        if command == "add":
            task = input("Enter a task to add: ")
            my_todo_list.add_task(task)
        elif command == "remove":
            task = input("Enter a task to remove: ")
            my_todo_list.remove_task(task)
        elif command == "display":
            my_todo_list.display_tasks()
        elif command == "quit":
            print("Goodbye!")
            break
        else:
            print("Invalid command. Please try again.")

if __name__ == "__main__":
    main()