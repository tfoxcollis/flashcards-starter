const Turn = require("../src/turn.js");
class Round{
  constructor(deck){
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard(){
    if(this.deck.length -1 >= this.turnCount) {
      return this.deck[this.turnCount];
    }
    return false
  }

  takeTurn(guess) {
    var turn = this.createTurn(guess);
    this.turnCount++;
    if(!turn.evaluateGuess()){
      this.incorrectGuesses.push(turn.currentCard.id);
    }else{
      this.correctGuesses.push(turn.currentCard.id);
    }
    return turn.giveFeedback();
  }

  createTurn(guess){
    return new Turn(guess, this.returnCurrentCard());
  }

  calculatePercentCorrect() {
    var correct = this.correctGuesses.length;

    return ((correct / this.turnCount) * 100).toFixed(0);
  }

  endRound(){
    var calculation = this.calculatePercentCorrect();
    console.log(`**Round Over!** You answered ${calculation}% of the questions correctly!`);
  }


}

module.exports = Round
