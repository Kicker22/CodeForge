import unittest

from algorithms.searching.binary_search import binary_search


class BinarySearchTests(unittest.TestCase):
    def test_returns_correct_index_when_target_exists(self):
        values = [1, 3, 5, 7, 9, 11]
        self.assertEqual(binary_search(values, 7), 3)

    def test_returns_minus_one_when_target_missing(self):
        values = [1, 3, 5, 7, 9, 11]
        self.assertEqual(binary_search(values, 6), -1)

    def test_handles_single_item_list(self):
        self.assertEqual(binary_search([42], 42), 0)
        self.assertEqual(binary_search([42], 7), -1)


if __name__ == "__main__":
    unittest.main()
