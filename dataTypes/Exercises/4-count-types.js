/* eslint-disable */
'use strict';


const countTypesInArray = (array) => {
    let collection = {}
    for (const obj of array) {if (typeof obj in collection) {collection[typeof obj] += 1} else {collection[typeof obj] = 1}}
    return collection;
};

module.exports = { countTypesInArray };
