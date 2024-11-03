'use strict';

const sum = (...args) => {
  let result = 0;
  for (const element of args) {
    result += element;
  }
  return result;
};

module.exports = { sum };
