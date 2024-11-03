'use strict';

const ages = (persons) => {
  for (const person in persons) {
    const dates = persons[person];
    const age = dates.died - dates.born;
    persons[person] = age;
  }
  return persons;
};

module.exports = { ages };
