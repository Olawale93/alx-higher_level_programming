#!/usr/bin/node
function add (a, b) {
  return a + b;
}

const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);

if (isNaN(a) || isNaN(b)) {
  console.log('Both arguments must be integers');
} else {
  console.log(add(a, b));
}
