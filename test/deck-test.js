const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/deck');
const Card = require('../src/card');

describe("deck", function(){

  it("should be a function", () => {
      expect(Deck).to.be.a("function");
  })

  it("should initialize with an array of card objects", () => {
    var cards = [
      new Card(1, "What is James' favorite color?", ["red", "blue", "green"], "red"),
      new Card(2, "What is James' favorite food?", ["burrito", "donut", "pot pie"], "burrito"),
      new Card(3, "What is James' favorite vacation destination?", ["Denmark", "Jamaica", "Anywhere with his wife"], "Anywhere with his wife" )
    ]
    const deck = new Deck(cards);

    expect(deck).to.have.key("cards");
    expect(deck.cards).to.deep.equal(cards);
  })
})
