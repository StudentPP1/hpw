'use strict';

const contract = (f, ...types) => {
    const checker = (...args) => {
        const typesLength = types.length;

        for (let i = 0; i < typesLength - 1; i++) {
            const type = types[i].name.toLowerCase();
            const arg = args[i];

            if (type != typeof arg) {
                throw new TypeError(
                    `Type of a argument: ${arg} must be ${type}`
                );
            }
        }

        const answer = f(...args);
        const finalType = types[typesLength - 1].name.toLowerCase();

        if (finalType != typeof answer) {
            throw new TypeError(
                `Type of answer must be ${finalType}`
            );
        }

        return answer;
    }
    return checker;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // Output: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Output: Hello world!

module.exports = { contract };
