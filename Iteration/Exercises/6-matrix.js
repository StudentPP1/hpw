'use strict';

const max = (matrix) => {
  const array = matrix.flat(Infinity);
  let max_element = array[0];
  for (const element of array) {
    if (max_element < element) {
      max_element = element;
    }
  }
  return max_element;
};

module.exports = { max };
