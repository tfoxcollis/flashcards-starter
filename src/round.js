class Round{
  constructor(deck){
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(){
    return this.deck[this.turnCount];
  }


}



module.exports = Round

// takeTurn method needs to:
// update turn count
// evaluate guesses
//give giveFeedback
// stores id of incorrect guesses


//test for:
// array for incorrectGuesses
// turnCount being updated with each turnCount
//    regardless of correct or incorrect answer (2 expects)
//
