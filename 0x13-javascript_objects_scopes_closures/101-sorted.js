#!/usr/bin/node
const data = require('./101-data.js');
const dict = data.dict;
const newDict = {};
for (const userId in dict) {
  const occurrences = dict[userId];

  if (!newDict[occurrences]) {
    newDict[occurrences] = [];
  }

  newDict[occurrences].push(userId);
}

console.log(newDict);
