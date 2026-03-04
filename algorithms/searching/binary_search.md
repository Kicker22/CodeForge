# Binary Search

Binary search is a divide-and-conquer algorithm for **sorted** collections.

## Idea
1. Check the middle element.
2. If it matches, return the index.
3. If target is larger, search the right half.
4. If target is smaller, search the left half.
5. Repeat until found or range is empty.

## Complexity
- Time: `O(log n)`
- Space: `O(1)` for this iterative version

## Notes
- Input must already be sorted in ascending order.
- If target does not exist, this implementation returns `-1`.
