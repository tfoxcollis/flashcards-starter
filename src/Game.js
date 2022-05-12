const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require("../src/card.js");
const Deck = require("../src/deck.js");
const Round = require("../src/round.js");

class Game {
  constructor() {
    this.currentRound = null
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start() {
    const cards = this.createFlashCards();
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);

  }
  createFlashCards() {
    return prototypeQuestions.map(function (question) {
      return new Card(question.id, question.question, question.answers, question.correctAnswer)
    })
  }
}

module.exports = Game;


//Should keep track of currentRound
//start: method that starts everything (in game but invoked in index.js)
// Create function FlashCards
//    read through prototypeQuestions and create the cards (new Card(parameters))
// Puts Cards in deck
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI

// **Helper functions done and fit to work w/ classes/methods

// game.start() - should be invoked in the index.js
