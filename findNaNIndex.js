// Find all the indexes where NaN is found in a
//  given array of numbers and NaN.

// findNaNIndex.js
function findNaNIndex(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
  
    return arr.reduce((indexes, value, index) => {
      if (Number.isNaN(value)) {
        indexes.push(index);
      }
      return indexes;
    }, []);
  }
  
  module.exports = findNaNIndex;