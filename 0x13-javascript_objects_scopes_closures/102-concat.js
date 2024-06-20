#!/usr/bin/node
const fs = require('fs');

// Function to concatenate two files
function concatFiles (sourceFile1, sourceFile2, destinationFile) {
  fs.readFile(sourceFile1, 'utf8', (err1, data1) => {
    if (err1) {
      console.error(`Error reading ${sourceFile1}:`, err1);
      return;
    }

    fs.readFile(sourceFile2, 'utf8', (err2, data2) => {
      if (err2) {
        console.error(`Error reading ${sourceFile2}:`, err2);
        return;
      }

      const concatenatedData = data1 + data2;

      fs.writeFile(destinationFile, concatenatedData, 'utf8', (err3) => {
        if (err3) {
          console.error(`Error writing to ${destinationFile}:`, err3);
          return;
        }

        console.log(`Concatenated ${sourceFile1} and ${sourceFile2} into ${destinationFile}`);
      });
    });
  });
}

// Call the function with appropriate file paths
concatFiles('path/to/sourceFile1.txt', 'path/to/sourceFile2.txt', 'path/to/destinationFile.txt');
