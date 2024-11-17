'use strict';

const removeElement = (array, item) => {
  if (array.includes(item)) array.splice(array.indexOf(item), 1);
};

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1);
// Результат: [1, 2, 3, 4, 6, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima'); 
removeElement(array2, 'Berlin'); 
console.log(array2);
// Результат: ['Kiev', 'Beijing', 'Saratov']

module.exports = { removeElement };
