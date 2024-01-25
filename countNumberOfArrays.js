// countNumberOfArrays.js
// This function will count the number of arrays 
// within the given array.


function countNumberOfArrays(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
  
    return arr.reduce((count, item) => {
      if (Array.isArray(item)) {
        count++;
      }
      return count;
    }, 0);
  }
  
  module.exports = countNumberOfArrays;
  