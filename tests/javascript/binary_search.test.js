const test = require("node:test");
const assert = require("node:assert/strict");

const { binarySearch } = require("../../algorithms/searching/binary_search");

test("returns correct index when target exists", () => {
  const values = [1, 3, 5, 7, 9, 11];
  assert.equal(binarySearch(values, 7), 3);
});

test("returns -1 when target is missing", () => {
  const values = [1, 3, 5, 7, 9, 11];
  assert.equal(binarySearch(values, 6), -1);
});

test("handles single-item list", () => {
  assert.equal(binarySearch([42], 42), 0);
  assert.equal(binarySearch([42], 7), -1);
});
