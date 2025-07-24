# Binary, Bits & Bytes 
Before we start diving into binary it might be good to refresh on our normal numbering system.

## Base 10 (The human system)
Our number system uses 10 as a base and the numbers range from 0-9 max per col is 9

### Example: 
lets look at the total number of days in a year.
If we write the total as a number we simply put 

365 aka (Three Hundred Sixty Five)

If we break this down what we actually should understand is that this number is really made up of 

100 + 100 + 100 + 60 + 5

or 

Three groups of one hundred -> sixty groups of ten -> 5 ones

The minimum possible number to write with three digits is 000 and the maximum is 999 for numbers larger that 999 we need a fourth column which we call the thousands column.

to break this down even more. Lets ask the question:

given three columns and the numbers 4, 2 and 3. what is the value of the number by col? 
```
| Hundreds | Tens | Ones |
|----------|------|------|
| 2        | 4    | 3    | <-- Groups of
```
We can see that this cleary makes the number 243, but why??

Well the answer is quite simple. 

We have:
* Hundreds:  100 + 100 = 200 (Because we have a value of 2 in the hundreds col)
* Tens: = 10 + 10 + 10 + 10 = 40 (because we have a value of 4 in the tens col)
* Ones: 1 + 1 + 1 = 3 (because we have a value of 3 in the ones col)

So we put that all together and we get the number 244 (2 hundreds, 4 Tens, 3 ones)

Its important to understand that each column can only increase its value to the maximum of its place value before having to add another column. 

```
| Hundreds | Tens | Ones |
|----------|------|------|
| 9        | 9    | 9    | <-- Maximum val per col 

999 + 1 = ?
9 groups of 100, 9 groups of 10, 9 groups of 1 + 1  = ???

SHABAM! we have to add another column 

| Thousands | Hundreds | Tens | Ones |
|-----------|----------|------|------|
| 1         | 0        | 0    | 0    |

999 + 1 = 1,000
```
And there you have the gist of Base-10..... Clear as mud??

TLDR; Each column in Base-10 increases by a factor of ten everytime we have to add a new column each column has a max value of 9

0 - 1 - 10 - 100 - 1000 etc 


# So, what exactly is Binary and Base-2 ???
Binary is a number system — just like decimal (base-10) or hexadecimal (base-16).
But unlike base-10, which uses 10 digits (0–9), binary uses only 2 digits (0-2)

0 and 1

Easiest way to think about this is that each column starting on the right can have a max value of 1 

this means that as we add columns each goes up by a factor of 2 just like Base-10 increased by a factor of 10

Example

Base-10: 1000 - 100 - 10 - 1

Base-2: 32 - 16 - 8 - 4 - 2 - 1

Thats all you need to understand about base-2, we take the same priciples as Base-10 and shrink it down.

# OK...Cool...But, why use it for computers ?

## Why not just use Base-10 ?

Computers are made of electronic circuts and the physical world limits what we can reliably detect. 

In computer systems when you get down to the nitty gritty you have essentiallly two states. 

1. Voltage present
2. No Voltage

Two options....So, think about what number system might fit into a 2 state system? 

maybe something like: 

* 1 = On(current flowing)
* 0 = Off(current not flowing)

This gives binary only two possible states per wire(bit)

### But wait why not just design a system that fits Base-10? 
To represent base-10 in hardware, you'd need 10 distinct voltage levels 

0v, 0.5v, 1v, 1.5v, ...., 4.5v

That's really hard to detect precisely and really exspensive to engineer and slower and less reliable. 

All computation is built from logic gates (AND, OR, NOT, etc).
These gates are made from transistors that:

- Open = OFF → 0  
- Closed = ON → 1

All arithmetic, logic, memory, and control flow is built from combining these gates using binary logic

### Binary is the perfect match for these states:

1 → TRUE

0 → FALSE

All of arithmetic, memory, and control flow comes from combining binary logic.

## Memory and Storage Are Bit-Based
Whether it's RAM, SSD, or hard drives — All computer memory is stored using **bits**:

- A single **bit** = 0 or 1
- A **byte** = 8 bits
- 1 GB = ~8 billion bits

For example:

* A single byte = 8 bits = 8 binary switches (e.g. 01010101)

* 1 GB = ~8 billion switches

### Wait, what the heck is a bit ? 
A bit is the smallet unit of information in computing (outside of quantum computing)
It can hold only one of two values 

0 or 1

The term bit comes from binary digit 
So when you hear "This computer has a 64 bit cpu, that means it can process 64 binary digits(bits) at once.

# So how do bits an binary fit together
Think if it this way:
* Binary is the system --- the rules of the game.
    * Binary defines how values are represented using only two options: 0 and 1.

* Bits are the pieces --- the actual data used to play the game. 
    * Bits are the actual 0s and 1s — the raw units of data following those rules.

So when you see something like 
Binary number : 101010

You're looking at a binary value composed of 6 bits

# What is a Bit Physically?

A bit isn’t just a number — it’s **implemented in real hardware**.

It can be:
- Voltage in a wire (e.g. 5V = 1, 0V = 0)
- A transistor switch (on = 1, off = 0)
- A charge in memory (charged = 1, discharged = 0)
- A magnetic orientation (north/south)
- A pulse of light (fiber optics)

> The **wire is the highway**,  
> The **bit is the car** — or the absence of one.
