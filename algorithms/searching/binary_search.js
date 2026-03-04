function binarySearch(values, target) {
  let left = 0;
  let right = values.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const guess = values[middle];

    if (guess === target) {
      return middle;
    }

    if (guess < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

module.exports = { binarySearch };

if (require.main === module) {
  const sampleValues = [2, 4, 6, 8, 10, 12, 14];
  const targetValue = 10;
  console.log(binarySearch(sampleValues, targetValue));
}
