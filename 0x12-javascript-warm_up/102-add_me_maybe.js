#!/usr/bin/node
function incrementAndCall (number, theFunction) {
  number += 1;
  theFunction(number);
}

// Exporting the function to make it visible from outside
module.exports = incrementAndCall;
