const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/turn');
const Card = require('../src/Card');

describe("turn", function(){

  it("should be a function", () => {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", () => {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should have users guess to the question", () => {
    const turn = new Turn("Disneyland");

    expect(turn.guess).to.equal("Disneyland");
  });

  it("should have a card object for the current card in play", () => {
    const card = new Card();
    const turn = new Turn("question", card);

    expect(turn.currentCard).to.equal(card);
  });

  it("should have method that returns the guess", () => {
    const turn = new Turn("Disneyland");

    expect(turn.returnGuess()).to.equal("Disneyland")
  });

  it("should have method that returns the Card object", () => {
    const card = new Card();
    const turn = new Turn("Disneyland", card);

    expect(turn.returnCard()).to.equal(card);
  });

  it("should return boolean indicating if guess matches correct answer", () => {
    const card = new Card(1, "What is the happiest place on earth?", ["the Beach", "Jamaica", "Disneyland"], "Disneyland");
    const turn = new Turn("Disneyland", card);

    expect(turn.evaluateGuess()).to.deep.equal(true);
  });

  it("should give feedback depending on correct or incorrect answer", () => {
    let card1 = new Card(1, "What is the happiest place on earth?", ["the Beach", "Jamaica", "Disneyland"], "Disneyland");
    let turn1 = new Turn("Disneyland", card1);

    expect(turn1.evaluateGuess()).to.deep.equal(true);
    expect(turn1.giveFeedback()).to.equal("Correct!");

    let card2 = new Card(1, "What is the happiest place on earth?", ["the Beach", "Jamaica", "Disneyland"], "the Beach");
    let turn2 = new Turn("Disneyland", card2);

    expect(turn2.evaluateGuess()).to.deep.equal(false);
    expect(turn2.giveFeedback()).to.equal("Incorrect!");

  })

})
