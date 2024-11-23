'use strict';

const f = (key, value, obj) => {
    console.log({ key, value })
}

const iterate = (obj, callback) => {
    for (const key in obj) {
        callback(key, obj[key], obj)
     }
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, f);

module.exports = { iterate };
