# Phase 3: Character Representation

So far, we’ve looked at numbers. But computers also need to represent **text** — letters, digits, punctuation, and even emojis.  
At the hardware level, everything is just bits and bytes. What makes the difference is **interpretation**.

---

## Numbers vs. Characters in Memory

When stored in memory, both numbers and characters are represented as binary.  
The meaning comes from **context** — whether the program treats the bits as a number or as a character.

- Example with the letter `'A'`:
  - Unicode/ASCII code point: **65**
  - In memory (8-bit binary): `01000001`
  - If interpreted as an integer → **65**
  - If interpreted as a character → **'A'**

- Example with the number `5`:
  - Integer value: **5**
  - In memory (8-bit binary): `00000101`
  - If interpreted as an integer → **5**
  - If misinterpreted as ASCII → **ENQ** (a control character, not printable)

👉 Same raw concept: **bits in memory**.  
What changes is how we **decode** those bits.

---

## 1. ASCII (American Standard Code for Information Interchange)

- One of the earliest character encoding standards (1960s).  
- Uses **7 bits** to represent 128 characters:
  - English letters (A–Z, a–z)
  - Digits (0–9)
  - Basic punctuation (`. , ! ?`)
  - Control codes (newline, tab, etc.)
- Usually stored in **8 bits (1 byte)** with the first bit unused.

**Examples:**
| Character | Decimal | Binary (8-bit) |
|-----------|---------|----------------|
| `A`       | 65      | `01000001`     |
| `a`       | 97      | `01100001`     |
| `0`       | 48      | `00110000`     |
| Space     | 32      | `00100000`     |

**Limitations:** ASCII only supports English and a small set of symbols.

---

## 2. Extended ASCII
- Expanded ASCII → **8 bits** (256 characters).  
- Added extra characters like `é`, `ñ`, `£`, `©`.  
- Problem: Not standardized → the upper 128 codes varied by system.

---

## 3. Unicode
- Goal: represent **every character in every language**.  
- Over **143,000 characters** defined, including:
  - All world scripts (Latin, Cyrillic, Chinese, Arabic, etc.)
  - Mathematical symbols
  - Emojis 🎉  

Unicode assigns each character a unique **code point**:  
- Example: `'漢'` = U+6F22  

---

## 4. UTF-8 (Unicode Transformation Format – 8-bit)
- The most common encoding for Unicode today.  
- **Variable-length encoding**:
  - Characters use **1–4 bytes** depending on complexity.
  - Backward-compatible with ASCII.

**Examples:**
| Character | Code Point | UTF-8 Encoding (binary)      | Bytes |
|-----------|------------|------------------------------|-------|
| `A`       | U+0041     | `01000001`                   | 1     |
| `é`       | U+00E9     | `11000011 10101001`          | 2     |
| `漢`      | U+6F22     | `11100110 10101100 10010010` | 3     |
| `😀`      | U+1F600    | `11110000 10011111 10011000 10000000` | 4 |

---

## 5. Other Encodings
- **UTF-16:** Uses 2 or 4 bytes per character. Common in Windows, Java.  
- **UTF-32:** Always 4 bytes per character. Simple but wasteful.  
- **Legacy encodings:** ISO-8859, Shift-JIS, etc. (region-specific, mostly obsolete).

---

## 6. Endianness in Text
When multi-byte encodings (UTF-16, UTF-32) are used, **endianness** matters.  
- Little-endian → least significant byte stored first.  
- Big-endian → most significant byte stored first.  
- Unicode sometimes includes a **BOM (Byte Order Mark)** at the start of text files to indicate endianness.

---

## 7. Practical Examples

### Python Snippets
```python
# ASCII binary
print(format(ord('A'), '08b'))  # 01000001

# Unicode code point
print(hex(ord('漢')))  # 0x6f22

# UTF-8 encoding
print('漢'.encode('utf-8'))  # b'\xe6\xbc\xa2'

# Binary for each character in a string
def string_to_binary(s):
    return ' '.join(format(b, '08b') for b in s.encode('utf-8'))

print(string_to_binary("Hi"))   # 01001000 01101001
print(string_to_binary("漢字"))  # 11100110 10101100 10010010 11101001 10001101 10010111
