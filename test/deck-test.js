const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/deck');
const Card = require('../src/card');

describe("deck", function(){

  it("should be a function", () => {
      expect(Deck).to.be.a("function");
  })

})
