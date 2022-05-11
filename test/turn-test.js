const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/turn');

describe("turn", function(){

  it("should be a function", () => {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  })

})
