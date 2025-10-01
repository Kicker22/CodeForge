# Phase 2: Data Representation

In **Phase 1**, we learned about bits & bytes and even built a binary converter in Python.  
Now we’re digging deeper: **how are numbers, text, and other data types actually represented in binary?**

---

## Signed vs. Unsigned Numbers

Before we look at representations, we need to understand the difference between **signed** and **unsigned** numbers.

### Unsigned
- Uses **all bits** to represent the magnitude of the number.
- Can only represent **zero and positive values**.
- Example (8-bit):
  - Minimum: `00000000` = `0`
  - Maximum: `11111111` = `255`

### Signed
- Reserves the **most significant bit (MSB)** as a sign indicator.
  - `0` → positive
  - `1` → negative
- Remaining bits represent the magnitude (commonly in **two’s complement**).
- Example (8-bit):
  - Minimum: `10000000` = `-128`
  - Maximum: `01111111` = `+127`

### Why This Matters
- **Range tradeoff:**  
  - 8-bit unsigned → `0 to 255`  
  - 8-bit signed   → `-128 to +127`
- **Interpretation:** The same binary pattern can mean different things depending on signedness.  
  - `11111111` → `255` (unsigned)  
  - `11111111` → `-1` (signed)
- **Real-world usage:**  
  - Unsigned → sizes, counts, memory addresses (can’t be negative)  
  - Signed → values that can be negative (temperature, position, balance)

---

### 📊 Range Comparison (8-bit Example)

| Representation | Minimum | Maximum | Example `11111111` |
|----------------|---------|---------|---------------------|
| **Unsigned**   | `0`     | `255`   | `255`              |
| **Signed**     | `-128`  | `+127`  | `-1`               |

---

## 1. Unsigned Integers
Unsigned integers can only represent **non-negative values (≥ 0)**.

- **Example (8-bit):**
  - `5`  → `00000101`
  - `13` → `00001101`
- **Limitation:** Cannot represent negative numbers.

**Key facts:**
- Maximum value of an 8-bit unsigned integer → `11111111` = `255`.
- Overflow: adding `1` to `255` wraps around to `00000000`.
- Try it: represent `42` as an 8-bit binary string → `00101010`.

---

## 2. Signed Integers (Two’s Complement)
Most modern CPUs use **two’s complement** to represent negative numbers.

**Rules:**
1. Positive numbers = same as unsigned binary.  
   - `+5` → `00000101`
2. Negative numbers:  
   - Take the absolute value in binary (`5` = `00000101`)  
   - Invert all bits → `11111010`  
   - Add `1` → `11111011` = `-5`

**Why it works:** Arithmetic is seamless.  
- Example: `5 + (-5)` → `00000101 + 11111011 = 00000000`.

---

## 3. Characters
- **ASCII:** Maps characters to integers (7–8 bits).
  - `'A'` → `01000001` (65 in decimal)
- **Unicode:** Created to support global scripts.
- **UTF-8:** Variable-length encoding of Unicode.
  - `'A'` → `01000001` (1 byte)
  - `'é'` → `11000011 10101001` (2 bytes)
  - `'漢'` → `11100110 10101100 10011010` (3 bytes)

**Try it:** Write a function to print the binary for each character in `"Hi"`.

---

## 4. Floating-Point Numbers
- **Why not just integers?** Fractions and decimals need precision.
- **IEEE 754 Standard:** Used for floating-point representation.
  - **Sign bit** → positive/negative  
  - **Exponent** → power of 2  
  - **Mantissa** → fractional part

**Example:**  
`5.75` in 32-bit IEEE 754 single-precision →  
`01000000101110000000000000000000`

**Precision issue:**  
`0.1 + 0.2 ≠ 0.3` exactly due to binary rounding.

---

## 5. Endianness
- **Little-endian:** Least significant byte stored first.
- **Big-endian:** Most significant byte stored first.
- **x86 CPUs:** Typically use little-endian.
- **Networking:** Big-endian (network byte order) is standard.

**Example:**  
Number = `0x12345678` (32-bit)  
- Little-endian → `78 56 34 12`  
- Big-endian    → `12 34 56 78`

---

## Reflection
- What was the most surprising thing I learned here?  
- How does understanding data representation change how I think about programming?  
