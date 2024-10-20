'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    {name: 'Pasha', phone: '+380445554433'},
    {name: 'Vasya', phone: '+380445767636'},
    {name: 'Katya', phone: '+380121324437'},
];

const findPhoneByName = (name) => {
    for (const user of phonebook) {
        if (user.name === name) return user.phone
    }
};

module.exports = { phonebook, findPhoneByName };
