# Phase 4: Floating-Point Numbers

Integers are perfect for whole numbers, but what about **fractions, decimals, and very large or very small values**?  
Computers represent these using **floating-point numbers**, standardized by **IEEE 754**.

---

## 0. Why Integers Aren’t Enough
- Integers can only represent whole values: `… -2, -1, 0, 1, 2 …`.  
- We need a way to handle:
  - **Fractions:** `0.5`, `3.14159`  
  - **Very large numbers:** `1,000,000,000`  
  - **Very small numbers:** `0.0000001`  

Floating-point works like **scientific notation**, but in **base 2** instead of base 10.

**Examples:**
- Decimal: `5.75 = 5.75 × 10^0`  
- Scientific: `5.75 = 575 × 10^-2`  
- Binary floating-point: `1.0111 × 2^2`  

---

## 1. IEEE 754 Standard
Most modern systems follow the IEEE 754 floating-point standard.  
A number is divided into three parts:

| Field       | Bits (32-bit float) | Purpose |
|-------------|----------------------|---------|
| **Sign**    | 1 bit               | `0` = positive, `1` = negative |
| **Exponent**| 8 bits              | Stores the power of 2 (with a bias) |
| **Mantissa** (Fraction) | 23 bits | Holds the significant digits |

**Formula:**

Value = (−1)^sign × (1.mantissa) × 2^(exponent − bias)

- Bias = `127` for single precision (32-bit)  
- Bias = `1023` for double precision (64-bit)  

---

## 2. Example: Representing 5.75 in IEEE 754 (32-bit)

**Step 1: Convert to binary**  
* 5.75 = 101.11 (binary)

**Step 2: Normalize**  
* 101.11 → 1.0111 × 2^2

**Step 3: Break into fields**  
- **Sign:** `0` (positive)  
- **Exponent:** `2 + 127 = 129 → 10000001`  
- **Mantissa:** `01110000000000000000000`  

**Final 32-bit pattern:**  
* 0 10000001 01110000000000000000000


**Hexadecimal form:**  
- 0x40B80000

---

## 3. Precision and Limits
- **Single precision (float, 32-bit):**
  - ~7 decimal digits of precision
  - Range: ~10^±38  
- **Double precision (double, 64-bit):**
  - ~15–16 decimal digits of precision
  - Range: ~10^±308  

---

## 4. Floating-Point Pitfalls

### Rounding Errors (Python Examples)
Not all decimals can be represented exactly in binary (similar to how `1/3` can’t be represented exactly in decimal).  
Example:
```python
print(0.1 + 0.2)   # 0.30000000000000004

import struct

# Convert float to raw IEEE 754 binary
def float_to_bin(num):
    [d] = struct.unpack(">I", struct.pack(">f", num))
    return f"{d:032b}"

print(float_to_bin(5.75))   # 01000000101110000000000000000000
print(float_to_bin(-5.75))  # 11000000101110000000000000000000

# Demonstrating precision issues
print(0.1 + 0.2)        # 0.30000000000000004
print(0.1 + 0.2 == 0.3) # False

