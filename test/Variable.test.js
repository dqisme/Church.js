var Variable = require('../src/Variable');

describe('Variable', function () {

  it('should be a function', function () {
    expect(Variable).to.be.a('function');
  });

  it('should can be constructed with its content', function () {
    var content = 'xx';
    var variable = new Variable(content);
    expect(variable).to.have.property('content');
    expect(variable).to.have.property('valid');
    expect(variable.content).to.be.equal(content);
  });

  it('should can be constructed with content that are one letter', function () {
    var letter = 'x';
    var variable = new Variable(letter);
    expect(variable.valid).to.be.true;
  });

  it('should can be constructed with content that are a word', function () {
    var word = 'foo';
    var variable = new Variable(word);
    expect(variable.valid).to.be.true;
  });

  it('should be invalid' +
    ' when constructed with content that are a digital', function () {

    var digital = '1';
    var variable = new Variable(digital);
    expect(variable.valid).to.be.false;
  });

  it('should be invalid' +
    ' when constructed with content that are a number', function () {

    var number = '123';
    var variable = new Variable(number);
    expect(variable.valid).to.be.false;
  });
});
