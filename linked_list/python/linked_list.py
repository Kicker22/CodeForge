#Define the Node
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


#Define the linked list
class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def insert_at_head(self, val):
        new_node = Node(val)
        
        # if list is empty add node to head and tail
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else: #Shift and add new value
            new_node.next = self.head
            self.head = new_node

        self.length +=1 

    def insert_at_tail(self, val):
        new_node = Node(val)

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

            output += f"{color}[{current_node.val}]\033[0m -> "
            current_node = current_node.next
            index += 1
        if counter >= 20:
            print("Possible infinite loop detected. Stopping early.")
            return
        else:
            output += "None"
            print(output)
            return

# Visual helper function for printing in terminal
# ===============================================
my_list = LinkedList()
def call_in_range(num=5):
    count = 1
    for i in range(num):
        my_list.insert_at_head(count)
        my_list.print_list()
        count +=1
call_in_range(6)

my_list.insert_at_tail(16)
my_list.print_list()
# ===============================================
