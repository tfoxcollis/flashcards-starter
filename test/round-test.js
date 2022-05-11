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

})
