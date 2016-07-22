var Identifier = require('../src/Identifier');

describe('Identifier', function () {

  it('should be a function', function () {
    expect(Identifier).to.be.a('function');
  });

  it('should can be constructed with its content', function () {
    var content = 'xx';
    var identifier = new Identifier(content);
    expect(identifier).to.have.property('content');
    expect(identifier.content).to.be.equal(content);
  });

  it('should have form inherited from LambdaTerm', function () {
    var identifier = new Identifier();
    expect(identifier).to.have.property('form')
  });
});
