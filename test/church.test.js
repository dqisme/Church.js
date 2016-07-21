var church = require('../src/church');

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

    it('should can recognize abstraction form', function() {
      expect(church.isAbstraction('&x.x')).to.be.true;
      expect(church.isAbstraction('&xx.xx')).to.be.true;
      expect(church.isAbstraction('&11.111')).to.be.true;
      expect(church.isAbstraction('&xx.111')).to.be.true;
      expect(church.isAbstraction('&xx.1dd')).to.be.true;
    });
  });

  describe('test application recognition', function() {

    it('should can recognize application form', function () {
      expect(church.isApplication('x x')).to.be.true;
      expect(church.isApplication('xx xx')).to.be.true;
      expect(church.isApplication('11 111')).to.be.true;
      expect(church.isApplication('xx 111')).to.be.true;
      expect(church.isApplication('xx 1dd')).to.be.true;
    });
  });
});
