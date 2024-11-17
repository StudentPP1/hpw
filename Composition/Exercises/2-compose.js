'use strict';

function compose(...fns) {
    let errorHandler;

    function get_value(x) {
        if (fns.length === 0) {
            return x;
        };
    
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                if (typeof fns[i] === "function") {
                    x = fns[i](x);
                }
                else {
                    throw Error(`${fns[i]} - is not a function`); 
                }
            } 
            return x;
        }
        catch (error) {
            if (errorHandler) {
                errorHandler(error);
            }
            return undefined;
        }
    
    };

    get_value.on = (name, handler) => {
        if (name === 'error') {
            errorHandler = handler;
        }
    };

    return get_value;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);
f.on('error', e => console.log(e));
const x = f(5);
console.log(x)

module.exports = { compose };
