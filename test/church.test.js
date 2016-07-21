var church = require('../src/church');
var expect = require('chai').expect;

describe('test church', function () {

  describe('test identifiers recognition', function () {

    it('should can recognize integer as identifier', function () {
      expect(church.isIdentifier('1')).to.be.true;
      expect(church.isIdentifier('2')).to.be.true;
      expect(church.isIdentifier('10')).to.be.true;
    });

    it('should can recognize point number as not identifier', function () {
      expect(church.isIdentifier('10.1')).to.be.false;
    });

    it('should can recognize empty string as not identifier', function () {
      expect(church.isIdentifier('')).to.be.false;
    });

    it('should can recognize letter words as identifier', function () {
      expect(church.isIdentifier('foo')).to.be.true;
      expect(church.isIdentifier('bar')).to.be.true;
    });
  });

  describe('test abstraction recognition', function() {

    it('should can recognize simple abstraction with only identifier', function() {
      expect(church.isAbstraction('&x.x')).to.be.true;
    });
  });
});
