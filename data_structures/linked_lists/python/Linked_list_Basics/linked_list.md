 # Linked list basics
 ### Table of Contents
- [Linked List vs Array](#whats-the-diff-between-linked-lists-and-arrays)
- [Conceptual Indexing](#important-distinction)
- [Basic Structure](#basic-linked-list-starting-structure)
- [Growth Process](#basic-node-growth)
- [Why Use Linked Lists?](#so-why-use-a-linked-list)

 ## What's the difference between linked lists and arrays?


 | Feature            | Array                           | Singly Linked List                      |
| ------------------ | ------------------------------- | --------------------------------------- |
| Storage            | Contiguous in memory            | Scattered; nodes connected via pointers |
| Access             | Constant-time by index          | Linear-time (must traverse)             |
| Insertion (middle) | Costly (shift elements)         | Cheap (just rewire pointers)            |
| Deletion           | Costly (shift elements)         | Cheap (adjust pointers)                 |
| Memory overhead    | No per-element overhead         | Extra memory for `next` pointers        |
| Resize             | Needs copying or reserved space | Grows one node at a time                |


### Important Distinction

 Linked lists don’t have native indexes built in. You create the idea of an index by manually counting as you traverse the list:

 Even though a linked list doesn’t store elements in a contiguous block of memory like an array does, you can still refer to each node by its “position” starting from 0

The example below shows a method for finding a specific item (i.e. node data) in a singly linked list.

Since linked lists don’t have built-in indexing like arrays, I need to manually track an index as I traverse the list.

This “index” isn’t a real memory address — it's just a conceptual position starting at 0, which helps me reason through the list more easily.
I find it much simpler to think in terms of 0-based indices (e.g. 0 to 5) than to worry about actual memory locations, which are abstracted away in Python anyway.

```
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

```
In contrast, arrays offer constant-time access (O(1)) via built-in indexing:
arr[2] directly jumps to the memory location for index 2, without needing to traverse any values.

## Basic linked list starting structure
We want to define a node and a list

```
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None      # Start of the list
        self.tail = None      # (Optional) End of the list for O(1) append
        self.length = 0       # (Optional) Number of elements in the list
```
### Basic node growth (Insert at head example)
```
def insert_at_head(self, data):

    new_node = Node(data)
        
    if self.head is None:
        self.head = new_node
        self.tail = new_node
     else:
        new_node.next = self.head
        self.head = new_node

    self.length +=1 

```
Each time you insert a new node, the list “grows” by:


1. Allocating a new node object in memory (usually on the heap)

2. Linking it to the existing chain by setting the .next pointer on another node

3. Updating head, tail, or intermediate .next pointers as needed

```
+--------+-------+                                  +--------+-------+
|  Data  | Next  | --> points to the next node  --> |  Data  | Next  |   
+--------+-------+                                  +--------+-------+
```
As you add more nodes it grows as shown in the Linked List example below.  

### Singly lingked list structure:
Notice that each node points to the next node via its .next reference.
Each node lives independently in memory, not in a contiguous block like an array.
They are connected solely by pointers.

```
[1] -> None
[2] -> [1] -> None
[3] -> [2] -> [1] -> None
[4] -> [3] -> [2] -> [1] -> None
[5] -> [4] -> [3] -> [2] -> [1] -> None
[6] -> [5] -> [4] -> [3] -> [2] -> [1] -> None
[6] -> [5] -> [4] -> [3] -> [2] -> [1] -> [16] -> None
```

Again, Each node is independent in memory, and only linked by .next pointers.
```

[6] -> [5] -> [4] -> [3] -> [2] -> [1] -> [16] -> None

┌─────────────┐        ┌─────────────┐        ┌─────────────┐
│ Data:   6   │   →    │ Data:   5   │   →    │ Data:   4   │   → None
│ Next:  208  │        │ Next:  412  │        │ Next: None  │
└─────────────┘        └─────────────┘        └─────────────┘
   Addr: 100              Addr: 208              Addr: 412

```

### Basic Array/list Structure:
In contrast, arrays or Python lists store items in a contiguous block of memory, where each element is indexed automatically:

Arrays are like a row of boxes in a shelf, tightly packed and indexed:
```
[My, cat, is, orange, !]

 Memory Addresses → 
┌────────┬────────┬────────┬────────┬────────┐ 
│  100   │  104   │  108   │  112   │  116   │  ← addresses (simplified) 
├────────┼────────┼────────┼────────┼────────┤ 
│  [My]  │ [cat]  │  [is]  │[orange]│  [!]   │  ← values 
└────────┴────────┴────────┴────────┴────────┘ 
    0        1         2        3       4       ← index 
``` 

### You can reference the Python or JS files in the linked_list directory for examples on common methods usually found in LL's

# Challenges (Singly linked lists)
| Problem                    | Concept Practiced            |
| -------------------------- | ---------------------------- |
| **Reverse a list**      | Pointer rewiring             |
| **Find middle of list**    | Fast/slow pointer pattern    |
| **Detect cycle (Floyd’s)** | Algorithmic pointer logic    |
| **Nth from end**           | Two-pointer sliding window   |
| **Merge two sorted lists** | Recursion or iterative merge |
| **Remove duplicates**      | Memory + traversal           |



## So why use a linked list ?? 

They are best when: 
* You are going to Insert/delete frequently at the head or middle
* Don’t need fast random access
* Want dynamic memory usage without resizing arrays

# Advanced concepts 
TBD...




