// run 'node test.js' to run in the terminal

//PART 1: Array Function Development
const {findNaNIndex, isArrayFactorChain, countNumberOfArrays } = require('./index');

// Helper function to log test results
function test(description, actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log(`[PASS] ${description}`);
  } else {
        console.error(`[FAIL] ${description}\n     Expected: ${JSON.stringify(expected)}\n     Received: ${JSON.stringify(actual)}`);
  }
}

// Testing findNaNIndex
console.log("Testing findNaNIndex");
test("finds indexes of NaN in [2, NaN, 8, 16, 32]", findNaNIndex([2, NaN, 8, 16, 32]), [1]);
test("finds indexes of NaN in [2, 4, NaN, 16, 32, NaN]", findNaNIndex([2, 4, NaN, 16, 32, NaN]), [2, 5]);
test("finds no NaN in [2, 4, 16, 32]", findNaNIndex([2, 4, 16, 32]), []);

// Testing isArrayFactorChain
console.log("\nTesting isArrayFactorChain");
test("confirms [2, 4, 8, 16, 32] is a factor chain", isArrayFactorChain([2, 4, 8, 16, 32]), true);
test("confirms [2, 4, 8, 16, 32, 68] is not a factor chain", isArrayFactorChain([2, 4, 8, 16, 32, 68]), false);

// Testing countNumberOfArrays
console.log("\nTesting countNumberOfArrays");
test("counts arrays in [2,8,[6],3,3,5,3,4,[5,4]]", countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]), 2);
test("counts arrays in [2,8,[6,3,3],[4],5,[3,4,[5,4]]]", countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]), 3);

// Demonstrate using the library to manipulate arrays and objects
console.log("\nDemonstration of Library Functionality");
// Example usage of findNaNIndex
console.log("- findNaNIndex([2, NaN, 4, NaN, 8]):", findNaNIndex([2, NaN, 4, NaN, 8]));

// Example usage of isArrayFactorChain
console.log("- isArrayFactorChain([3, 9, 27, 81]):", isArrayFactorChain([3, 9, 27, 81]));

// Example usage of countNumberOfArrays
console.log("- countNumberOfArrays([1, [2, 3], [4, 5], 6]):", countNumberOfArrays([1, [2, 3], [4, 5], 6]));


////PART 2: OBJECT FUNCTION DEVELOPMENT
const { participants, winnersObject, biggestLoser } = require('./index');

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
  ]
// Test participants
console.log("\nTesting participants");
test("lists all unique participants", participants(matches), ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']);

// Test winnersObject
console.log("\nTesting winnersObject");
test("creates object of winners and whom they've beaten", winnersObject(matches), {
  'Alice': ['Bob', 'Carol'],
  'Bob':   [],
  'Carol': ['Dean'],
  'Dean':  ['Elise'],
  'Elise': ['Bob', 'Carol'],
});

// Test biggestLoser
console.log("\nTesting biggestLoser");
test("finds the biggest loser", biggestLoser(matches), 'Bob');
