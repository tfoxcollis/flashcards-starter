const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/deck');
const Card = require('../src/card');

//Global variables
var cards = [
  new Card(1, "What is James' favorite color?", ["red", "blue", "green"], "red"),
  new Card(2, "What is James' favorite food?", ["burrito", "donut", "pot pie"], "burrito"),
  new Card(3, "What is James' favorite vacation destination?", ["Denmark", "Jamaica", "Anywhere with his wife"], "Anywhere with his wife" )
]

describe("deck", function(){

  it("should be a function", () => {

    expect(Deck).to.be.a("function");
  })

  it("should initialize with an array of card objects", () => {
    const deck = new Deck(cards);

    expect(deck.cards).to.deep.equal(cards);
  })

  it("should know how many cards are in the deck", () => {
    const deck = new Deck(cards);

    expect(deck.countCards()).to.equal(3);
  })
})
