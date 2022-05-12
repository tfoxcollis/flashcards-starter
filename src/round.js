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
    return turn.giveFeedback();
  }

  createTurn(guess){
    return new Turn(guess, this.returnCurrentCard())
  }

}



module.exports = Round

// takeTurn method needs to:
//give giveFeedback
