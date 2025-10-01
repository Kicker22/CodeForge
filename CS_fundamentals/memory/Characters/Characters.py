# This file is for exploring the basics of character data types in general
# and how they are represented in memory.

# A character is a single symbol, letter, or digit.
# In Python, characters are represented as strings of length 1.

# For example:
char_a = 'a'
char_b = 'b'
char_1 = '1'

# You can check the type of a character
print(type(char_a))  # Output: <class 'str'>    
print(len(char_b))   # Output: 1
print(type(char_1))  # Output: <class 'str'>

# Characters are stored in memory using encoding schemes like ASCII or Unicode.
# ASCII uses 7 bits to represent characters, while Unicode can use up to 32 bits
# to represent a wide range of characters from different languages.

# You can get the ASCII or Unicode code point of a character using the ord() function
print(ord(char_a))  # Output: 97 (ASCII code for 'a')
print(ord(char_b))  # Output: 98 (ASCII code for 'b')
print(ord(char_1))  # Output: 49 (ASCII code for '1')

# You can convert a code point back to a character using the chr() function
print(chr(97))  # Output: 'a'
print(chr(98))  # Output: 'b'
print(chr(49))  # Output: '1'

# Characters can be concatenated to form strings
greeting = char_a + char_b + char_1
print(greeting)  # Output: 'ab1'

# You can also use escape sequences to represent special characters
newline_char = '\n'  # Newline character
tab_char = '\t'      # Tab character
print("Hello" + newline_char + "World")  # Output: Hello (newline) World
print("Column1" + tab_char + "Column2")   # Output: Column1 (tab) Column2

# In summary, characters are fundamental data types used to represent text,
# and they are stored in memory using encoding schemes like ASCII and Unicode.  

# The code below converts a sentence into its character codes and back.
sentence = "Hello, World!"
char_codes = [ord(c) for c in sentence]
print(char_codes)  # Output: [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]
reconstructed_sentence = ''.join(chr(code) for code in char_codes)
print(reconstructed_sentence)  # Output: Hello, World! 