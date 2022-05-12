const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/round.js");
const Card = require("../src/card.js");
const Deck = require("../src/deck.js");
const Turn = require("../src/turn.js");

//Global cards variable
var cards = [
  new Card(1, "What is James' favorite color?", ["red", "blue", "green"], "red"),
  new Card(2, "What is James' favorite food?", ["burrito", "donut", "pot pie"], "burrito"),
  new Card(3, "What is James' favorite vacation destination?", ["Denmark", "Jamaica", "Anywhere with his wife"], "Anywhere with his wife" )
]

describe("Round", function() {

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
    expect(round.incorrectGuesses).to.be.empty;
  });
});

describe("round.takeTurn", function () {

  it("should be a function", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.takeTurn).to.be.a("function")
  });

  it("should update turnCount each turn", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    round.takeTurn();
    expect(round.turnCount).to.equal(1)
    round.takeTurn();
    round.takeTurn();

    expect(round.turnCount).to.equal(3);
  });

  it("should create new instance of Turn in takeTurn", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.createTurn()).to.be.an.instanceOf(Turn);
  });

  it("should add incorrect guess into incorrectGuesses array", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    round.takeTurn("blue");
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it("should not add correct guess into incorrectGuesses array", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    round.takeTurn("red");
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should return feedback depending on correct/incorrect guess", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    var feedBack = round.takeTurn("red");
    expect(feedBack).to.equal("Correct!");

    var feedBack = round.takeTurn("pot pie");
    expect(feedBack).to.equal("Incorrect!");

  });
})

describe("round.calculatePercentCorrect", function (){

  it("should be a function", () => {
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.calculatePercentCorrect).to.be.a("function");
  });

})
