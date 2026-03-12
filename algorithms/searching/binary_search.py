def binary_search(values, target):
    left = 0
    right = len(values) - 1

    while left <= right:
        middle = (left + right) // 2
        guess = values[middle]

        if guess == target:
            return middle

        if guess < target:
            left = middle + 1
        else:
            right = middle - 1

    return -1


if __name__ == "__main__":
    sample_values = [2, 4, 6, 8, 10, 12, 14]
    target_value = 10
    print(binary_search(sample_values, target_value))
