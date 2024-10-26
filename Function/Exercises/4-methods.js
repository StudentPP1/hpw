'use strict';

const methods = (iface) => {
  let list = []
  for (const fn in iface) {
    if (typeof iface[fn] == "function") {
      list.push([fn.toString(), iface[fn].length])
    }
  }
  return list;
};

module.exports = { methods };
