 # Linked list basics
 
 ### What's the diff between linked lists and arrays?


 | Feature            | Array                           | Singly Linked List                      |
| ------------------ | ------------------------------- | --------------------------------------- |
| Storage            | Contiguous in memory            | Scattered; nodes connected via pointers |
| Access             | Constant-time by index          | Linear-time (must traverse)             |
| Insertion (middle) | Costly (shift elements)         | Cheap (just rewire pointers)            |
| Deletion           | Costly (shift elements)         | Cheap (adjust pointers)                 |
| Memory overhead    | No per-element overhead         | Extra memory for `next` pointers        |
| Resize             | Needs copying or reserved space | Grows one node at a time                |


## Basic linked list starting structure
We want to define our node and our list

```
<!-- Python -->

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
### Basic node growth 
 This was created by inserting at the head of the list and then one insert (16) at tail. Notice that [1] was added first and then is assigned to tail as we add to the list. Until, we add a value directly to the tail of the list.
```
[1] -> None
[2] -> [1] -> None
[3] -> [2] -> [1] -> None
[4] -> [3] -> [2] -> [1] -> None
[5] -> [4] -> [3] -> [2] -> [1] -> None
[6] -> [5] -> [4] -> [3] -> [2] -> [1] -> None
[6] -> [5] -> [4] -> [3] -> [2] -> [1] -> [16] -> None
```




