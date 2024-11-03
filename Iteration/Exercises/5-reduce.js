'use strict';

const sum = (...args) => args.reduce((prev, x) => prev + x, 0)

module.exports = { sum };
