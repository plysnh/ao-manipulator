// isArrayFactorChain.js
// This function will check if each element in the array 
// is a factor of the next element.
function isArrayFactorChain(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] % arr[i] !== 0) {
        return false;
      }
    }
  
    return true;
  }
  
  module.exports = isArrayFactorChain;
  