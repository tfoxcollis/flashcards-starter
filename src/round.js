const Turn = require("../src/turn.js");
class Round{
  constructor(deck){
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(){
    return this.deck[this.turnCount];
  }
  takeTurn() {
    this.turnCount++;
  }

}



module.exports = Round

// takeTurn method needs to:
// evaluate guesses
//give giveFeedback
// stores id of incorrect guesses


//test for:
// turnCount being updated with each turnCount
//    regardless of correct or incorrect answer (2 expects)
//
