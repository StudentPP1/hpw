'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const obj1 = {name: ""};
    let obj2 = {name: ""};
    obj1.name = "test"; 
    obj2.name = "test";
    // obj1 = {something: ""}; => виключення, бо obj1 - це константа 
    obj2 = {};
};

module.exports = { fn };
