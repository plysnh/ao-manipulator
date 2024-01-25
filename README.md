# Manipulate Array and Objects in JavaScript
This module provides functions to manipulate arrays and objects.

npm link: https://www.npmjs.com/package/ao-manipulator
## Purpose
**_BEWARE:_ This library was published for learning purposes.
## Usage
**Install it:**
`npm install @nhi_phan/<ao-manipulator>`
**Require it:**
`const _ = require('@nhi_phan/<ao-manipulator>');`
**Call it:**
const results = _.isArrayFactorChain([2, 4, 8, 16, 32]) //=> true
## Documentation
The following functions are currently implemented:
* `findNaNIndex()`: Find all the indexes where NaN is found in a given array of numbers and NaN.
* `isArrayFactorChain()`: Return true or false if an array is a factor chain or not
* `countNumberOfArrays()`: Return the count for the number of arrays inside a given array.
* `participants()`: Returns an array of all unique the player names.
* `winnersObject()`: Returns an object which lists each participant, and a list of who they've beaten.
* `biggestLoser()`: Returns the loser name with the biggest tally of loser_points. If a player is the winner, the loser_points are subtracted, and if a player is a loser, then the loser_points are added. Find the player with the largest tally of loser_points.