#!/usr/bin/node
const args = process.argv.slice(2);

const firstArg = args[0];
const secondArg = args[1];

if (firstArg === undefined || secondArg === undefined) {
  console.log('Not enough arguments');
} else {
  console.log(`${firstArg} is ${secondArg}`);
}
