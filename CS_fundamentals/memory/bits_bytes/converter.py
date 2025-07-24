# This files is to explore bits and bytes using python(higher level language)
import argparse

def decimal_to_binary(n):
    return bin(n)[2:] #remove prefix

def main():
    parser = argparse.ArgumentParser(description="Convert decimal to binary")
    parser.add_argument('--dec', type=int, help="Decimal number to convert")
    args = parser.parse_args()

    if args.dec is not None:
        binary = decimal_to_binary(args.dec)
        print(f"Decimal: {args.dec}")
        print(f"Binary: {binary}")


if __name__ == '__main__':
    main()