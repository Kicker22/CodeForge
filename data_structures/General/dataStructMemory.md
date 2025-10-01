# Representing Data Structures in Memory  

When we study data structures, it’s not enough to just know the code. To master them, you need to **visualize how they live in memory**. This README lays out conventions for how we’ll represent different structures in CodeForge.  

---

## 1. Arrays (Contiguous Memory)  

Arrays are blocks of memory laid out **back-to-back**. Each element is stored at a fixed offset from the start of the array.  

Memory Addresses →
┌────────┬────────┬────────┬────────┐
│ 1000 │ 1004 │ 1008 │ 1012 │ ← addresses (32-bit ints)
├────────┼────────┼────────┼────────┤
│ 7 │ 12 │ 42 │ 99 │ ← values
└────────┴────────┴────────┴────────┘
Index → 0 1 2 3

vbnet
Copy code

**Key idea:** constant-time access by index using the formula:  
address = base + (index * size_of_element)

yaml
Copy code

---

## 2. Linked Lists (Pointers Everywhere)  

Unlike arrays, linked lists are **not contiguous**. Each node lives independently, and nodes are chained together with pointers.  

### Singly Linked List
[ 7 | • ] → [ 12 | • ] → [ 42 | • ] → None

perl
Copy code
(`•` represents a pointer to the next node)

### In memory (addresses arbitrary):  
Address Value Next
1000 7 2080
2080 12 3044
3044 42 null

yaml
Copy code

---

## 3. Stacks (LIFO)  

Stacks are usually built **on top of arrays or linked lists**, but the concept is **Last In, First Out**.  

### Visual
Top → [99]
[42]
[12]
[7] ← Bottom

yaml
Copy code

**Memory note:** if implemented with an array, the "top" is just the last filled index.  

---

## 4. Queues (FIFO)  

Queues are **First In, First Out**, like a line at a store.  

### Visual
Front → [7] → [12] → [42] → [99] ← Rear

yaml
Copy code

**Memory note:** implemented with arrays (circular buffer) or linked lists with head/tail pointers.  

---

## 5. Trees (Hierarchical)  

Trees branch out. Each node points to children.  

### Binary Tree
css
Copy code
    [10]
   /    \
[5]      [15]
/ \ /
[2] [7] [12] [20]

yaml
Copy code

**Memory note:** nodes live in scattered memory, connected via pointers.  

---

## 6. Hash Tables (Buckets & Collisions)  

Hash tables use an array for **buckets**, and each bucket may contain a linked list or another structure for collisions.  

### Visual  
Hash Function → Index

Table:
0: [12] → [22] (collision chain)
1: []
2: [42]
3: []
4: [99]

yaml
Copy code

---

## Conventions in CodeForge  

- **Arrays:** drawn as contiguous memory with indexes and addresses.  
- **Linked Lists:** drawn as `[val | pointer]` boxes.  
- **Stacks/Queues:** drawn vertically (stack) or horizontally (queue).  
- **Trees:** drawn top-down with pointers.  
- **Hash Tables:** drawn as arrays with chains for collisions.  

Whenever possible, we’ll show **both the conceptual diagram and the memory address model**.  

---

👉 The idea is: *code → visualization → memory model*. This way you’ll always see the full picture of what the data structure means.  
