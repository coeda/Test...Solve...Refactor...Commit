const squareRoot = require('../morningChallenge.js');
const Chai = require('chai');
const expect = Chai.expect;
const squareRootGenerator = squareRoot();

describe('Square Root Generator', () => {
  it('Should be a function', () => {
    expect(squareRootGenerator).to.exist;
  });
  describe('Square Root generation', () => {
    it('should return the square root of a number', () => {
      expect(squareRootGenerator.squared).to.be.a('function');
      expect(squareRootGenerator.squared(64)).to.equal(8);
    });
  });
  describe('Return sum of square roots', () => {
    it('should return sum of square roots', () => {
    expect(squareRootGenerator.sums).to.be.a('function');
    expect(squareRootGenerator.sums()).to.be.a('number');
    expect(squareRootGenerator.sums(2)).to.equal(2.41);
    expect(squareRootGenerator.sums(100)).to.equal(671.46);
   });
  });
});


