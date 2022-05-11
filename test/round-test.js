const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/round.js");
const Card = require("../src/card.js");
const Deck = require("../src/deck.js");
const Turn = require("../src/turn.js");

describe("Round", function() {
//Global cards variable
  var cards = [
    new Card(1, "What is James' favorite color?", ["red", "blue", "green"], "red"),
    new Card(2, "What is James' favorite food?", ["burrito", "donut", "pot pie"], "burrito"),
    new Card(3, "What is James' favorite vacation destination?", ["Denmark", "Jamaica", "Anywhere with his wife"], "Anywhere with his wife" )
  ]

  it("should be a function", () => {

    expect(Round).to.be.a("function");
  });

  it("should start with a deck", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck.cards);
  });

  it("should have method that returns the current card being played", () => {
    const deck = new Deck(cards);
    const round2 = new Round(deck);

    expect(round2.returnCurrentCard()).to.equal(cards[0]);
  });

  it("should have a turn count that starts at 0", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.turnCount).to.equal(0);
  });

  it("should have an empty array to store incorrect guesses", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.be.an.instanceOf(Array);
  })
})
