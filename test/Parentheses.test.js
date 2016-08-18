var Parentheses = require('../src/Parentheses');

describe('Parentheses Convention', function () {
  it('should be a function', function () {
    expect(Parentheses).to.be.a('function');
  });

  it('should have form and content inherited from LambdaTerm', function () {
    var parenthesesContent = '(x)';
    var parentheses = new Parentheses(parenthesesContent);
    expect(parentheses).to.have.property('content');
    expect(parentheses).to.have.property('valid');
  });

  it('should be invalid when constructed with a non-application content', function () {
    var nonParenthesesContent = 'x';
    var parentheses = new Parentheses(nonParenthesesContent);
    expect(parentheses.valid).to.be.false;
  });

  it('should have body property when constructed with a parenthetical content', function () {
    var parentheticalContent = '(x)';
    var parentheses = new Parentheses(parentheticalContent);
    expect(parentheses).to.have.property('body');
  });
});
