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

  it('should have form as regular expression as \\w+', function () {
    var identifierForm = /^[a-zA-Z]+$/;
    var identifier = new Identifier();
    expect(identifier.form).to.be.eql(identifierForm);
  });

  it('should can be constructed with content that are one letter', function () {
    var letter = 'x';
    var identifier = new Identifier(letter);
    expect(identifier).to.not.have.property('error');
  });

  it('should can be constructed with content that are a word', function () {
    var word = 'foo';
    var identifier = new Identifier(word);
    expect(identifier).to.not.have.property('error');
  });

  it('should have a error property' +
    ' when constructed with content that are a digital', function () {

    var digital = '1';
    var identifier = new Identifier(digital);
    expect(identifier).to.have.property('error');
  });

  it('should have a error property' +
    ' when constructed with content that are a number', function () {

    var number = '123';
    var identifier = new Identifier(number);
    expect(identifier).to.have.property('error');
  });
});
