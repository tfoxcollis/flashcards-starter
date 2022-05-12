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
  takeTurn(guess) {
    var turn = this.createTurn(guess);
    this.turnCount++;
    if(!turn.evaluateGuess()){
      this.incorrectGuesses.push(turn.currentCard.id)
    }
  }

  createTurn(guess){
    return new Turn(guess, this.returnCurrentCard())
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
