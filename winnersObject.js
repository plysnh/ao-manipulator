// winnersObject.js
// This function creates an object that maps 
// each participant to a list of players they have beaten.

function winnersObject(matches) {
    if (!Array.isArray(matches)) {
        throw new Error('Input must be an array of matches');
    }
  
    const result = {};
    matches.forEach(({ winner, loser }) => {
        if (!result[winner]) result[winner] = [];
        if (!result[loser]) result[loser] = [];
  
        result[winner].push(loser);
    });
  
    for (let player in result) {
        // Ensure unique values
        result[player] = [...new Set(result[player])]; 
    }
  
    return result;
  }
  
module.exports = winnersObject;
  