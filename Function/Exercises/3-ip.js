'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const list = ip.split('.').map(e => parseInt(e))  
  const fn = (x,item) => (x<<8)+item
  return list.reduce(fn, 0);
};

module.exports = { ipToInt };
