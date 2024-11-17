'use strict';

const pipe = (...fns) => (x) => {
    for ( const f of fns ) {
        if (typeof f === "function") {
            x = f(x);
        }
        else {
            throw new Error; 
        }
    } 
    return x;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const x = f(5);
console.log(x)

module.exports = { pipe };
