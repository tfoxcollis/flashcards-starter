const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/round.js");
const Card = require("../src/card.js");
const Deck = require("../src/deck.js");
const Turn = require("../src/turn.js");

describe("Round", function() {

  it("should be a function", () => {

    expect(Round).to.be.a("function");
  })

  it("should start with a deck", () => {
    var cards = [
      new Card(1, "What is James' favorite color?", ["red", "blue", "green"], "red"),
      new Card(2, "What is James' favorite food?", ["burrito", "donut", "pot pie"], "burrito"),
      new Card(3, "What is James' favorite vacation destination?", ["Denmark", "Jamaica", "Anywhere with his wife"], "Anywhere with his wife" )
    ]
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck.cards);
  })

})
