#Define the Node
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

#Define the linked list
class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def insert_at_head(self, data):
        new_node = Node(data)
        
        # if list is empty add node to head and tail
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else: #Shift and add new value
            new_node.next = self.head
            self.head = new_node

        self.length +=1 

    def insert_at_tail(self, data):
        new_node = Node(data)

        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            last = self.head
            while last.next:
                last = last.next
            last.next = new_node
            self.tail = new_node

        self.length += 1

    def delete_node(self, key):
        # Set temp var to store data
        temp = self.head

        # If key is head
        if temp is not None:
            if temp.data == key:
                self.head = temp.next
                temp = None
                return
        
        # Otherwise
        while temp is not None:
            if temp.data == key:
                break
            prev = temp 
            temp = temp.next

        if temp == None:
            return
            
        prev.next = temp.next
        temp = None

    def print_list(self):
        current_node = self.head
        output = ""
        index = 0
        counter = 0
        while current_node is not None:
            # default to cyan
            color = "\033[96m"  
            
            if current_node == self.head:
                # green
                color = "\033[92m"  
            if current_node.next is None:
                # red (tail)
                color = "\033[91m"  

            output += f"{color}[{current_node.data}]\033[0m -> "
            current_node = current_node.next
            index += 1
        if counter >= 20:
            print("Possible infinite loop detected. Stopping early.")
            return
        else:
            output += "None"
            print(output)
            return
    
    def reverse_list(self):
        prev = None
        curr = self.head

        while curr is not None:
            # new var next_node  = the next item in list
            next_node = curr.next
            # current node = the previous node
            curr.next = prev
            # previous node = the current node 
            prev = curr
            # Move current forward
            curr = next_node

        self.tail = self.head
        self.head = prev

def find_item(self, item):
    curr = self.head
    
    # Start at head (index 0)
    index = 0  

    while curr is not None:
        if curr.data == item:
            print(f"Item: {item} found at index: {index}")
            return index
        curr = curr.next
        index += 1

    print(f"Item: {item} not found in list.")
    return

    
# Visual helper function for printing in terminal
# ===============================================
my_list = LinkedList()
print("===========================")
print("OG List")
print("===========================")

def call_in_range(num=5):
    count = 1
    for i in range(num):
        my_list.insert_at_head(count)
        my_list.print_list()
        count +=1

call_in_range(6)

print("===========================")
my_list.reverse_list()
print("Reversed list")
my_list.print_list()
print("===========================")
my_list.find_item(5)
# ===============================================



