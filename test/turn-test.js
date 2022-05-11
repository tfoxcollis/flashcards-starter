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
  })

  it("should have users guess to the question", () => {
    const turn = new Turn("What is Disneyland?");

    expect(turn.guess).to.equal("What is Disneyland?");
  })

  it("should have a card object for the current card in play", () => {
    const card = new Card();
    const turn = new Turn("question", card);

    expect(turn.currentCard).to.equal(card);
  })

})
