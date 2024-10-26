'use strict';

const generateKey = (length, possible) => {
  const len = possible.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += possible.charAt(Math.floor(Math.random() * len))
  }
  return result;
};

module.exports = { generateKey };
