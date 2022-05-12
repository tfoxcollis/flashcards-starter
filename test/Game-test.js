const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/round.js");
const Card = require("../src/card.js");
const Deck = require("../src/deck.js");
const Turn = require("../src/turn.js");
const Game = require("../src/Game.js");


describe("flashCards function", function() {

  it("should be a function", () => {
    const game = new Game();

    expect(game.createFlashCards).to.be.a("function");
  })

  it("should return new card with info from prototypeQuestions", () => {
    const game = new Game();
    const card = new Card(1,"What allows you to define a set of related information using key-value pairs?",
                          ["object", "array", "function"], "object")
    let cards = game.createFlashCards();
    expect(cards[0].question).to.equal(card.question);
  });


})
