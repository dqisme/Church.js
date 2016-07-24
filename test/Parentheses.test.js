var Parentheses = require('../src/Parentheses');

describe('Parentheses Convention', function () {
  it('should be a function', function () {
    expect(Parentheses).to.be.a('function');
  });

  it('should have form and content inherited from LambdaTerm', function () {
    var parenthesesContent = '(x)';
    var parentheses = new Parentheses(parenthesesContent);
    expect(parentheses).to.have.property('form');
    expect(parentheses).to.have.property('content');
  });

  it('should have form as regular expression for parentheses', function () {
    var parenthesesForm = /^\((.+?)\)$/;
    var parentheses = new Parentheses();
    expect(parentheses.form).to.be.eql(parenthesesForm);
  });

  it('should have error when constructed with a non-application content', function () {
    var nonParenthesesContent = 'x';
    var parentheses = new Parentheses(nonParenthesesContent);
    expect(parentheses).to.have.property('error');
  });
});
