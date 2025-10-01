# This files is to explore bits and bytes using python(higher level language)
import argparse

def number_to_binary(n):
    return bin(n)[2:] #remove prefix

def main():
    parser = argparse.ArgumentParser(description="Convert number to binary")
    parser.add_argument('--conv', type=int, help="Number to convert")
    args = parser.parse_args()

    if args.conv is not None:
        binary = number_to_binary(args.conv)
        print(f"Number: {args.conv}")
        print(f"Binary: {binary}")

# To run this script the command line should be:
# python3 converter.py --conv <decimal_number>
if __name__ == '__main__':
    main()