'use strict';

const removeElements = (array, ...items) => {
  for (let item of items) {
    if (array.includes(item)) array.splice(array.indexOf(item), 1);
  };
};

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1);
// Результат: [2, 3, 4, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2);
// Результат: ['Beijing', 'Saratov']

module.exports = { removeElements };
