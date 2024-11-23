'use strict';

function store(x) {
    function read() {
        return x;
    };
    return read;
};

const read = store(5);
const value = read();
console.log(value); // Output: 5

module.exports = { store };
