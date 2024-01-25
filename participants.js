// participants.js
// This function will create an array of unique 
// player names from the matches data.

function participants(matches) {
    if (!Array.isArray(matches)) {
        throw new Error('Input must be an array of matches');
    }
  
    const players = new Set();
    matches.forEach(match => {
        players.add(match.winner);
        players.add(match.loser);
    });
  
    return Array.from(players);
  }
  
module.exports = participants;
  