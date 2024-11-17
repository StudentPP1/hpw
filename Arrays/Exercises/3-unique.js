'use strict';

const unique = (array) => {
    let newArray = [];
    for (const item of array) {
        if (!newArray.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
};

const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1);
// Результат: [2, 1, 3]

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);
// Результат: ['top', 'bottom', 'left']

module.exports = { unique };
