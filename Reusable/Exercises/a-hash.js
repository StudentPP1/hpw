'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    'Pasha': '+380445554433',
    'Vasya': '+380445767636',
    'Katya': '+380121324437'
};

const findPhoneByName = (name) => {return phonebook[name]};

module.exports = { phonebook, findPhoneByName };
