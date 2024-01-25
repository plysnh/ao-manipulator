// biggestLoser.js
// This function calculates the "biggest loser" based on the tally of loser_points.

function biggestLoser(matches) {
    if (!Array.isArray(matches)) {
        throw new Error('Input must be an array of matches');
    }
  
    const points = {};
    matches.forEach(({ winner, loser, loser_points }) => {
        points[winner] = (points[winner] || 0) - loser_points;
        points[loser] = (points[loser] || 0) + loser_points;
    });
  
    return Object.keys(points).reduce((biggestLoser, player) => 
        points[player] > points[biggestLoser] ? player : biggestLoser);
  }
  
module.exports = biggestLoser;
  