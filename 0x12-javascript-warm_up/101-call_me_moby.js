#!/usr/bin/node
function executeXTimes (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
}

// Exporting the function to make it visible from outside
module.exports = executeXTimes;
