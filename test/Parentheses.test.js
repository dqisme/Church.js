var Parentheses = require('../src/Parentheses');
var Variable = require('../src/Variable');
var Abstraction = require('../src/Abstraction');
var Application = require('../src/Application');

describe('Parentheses Convention', function () {
  it('should be a function', function () {
    expect(Parentheses).to.be.a('function');
  });

  it('should have form and content inherited from LambdaTermType', function () {
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

  it('should have a body which is a variable when constructed with a parentheses', function () {
    var bodyContentAsVariable = 'x';
    var parenthesesContent = '(' + bodyContentAsVariable + ')';
    var parentheses = new Parentheses(parenthesesContent);
    expect(parentheses.body).to.be.an.instanceOf(Variable);
    var bodyAsVariable = new Variable(bodyContentAsVariable);
    expect(parentheses.body).to.be.eql(bodyAsVariable);
  });

  it('should have a body which is a abstraction when constructed with a parentheses', function () {
    var bodyContentAsAbstraction = '&x.y';
    var parenthesesContent = '(' + bodyContentAsAbstraction + ')';
    var parentheses = new Parentheses(parenthesesContent);
    expect(parentheses.body).to.be.an.instanceOf(Abstraction);
    var bodyAsVariable = new Abstraction(bodyContentAsAbstraction);
    expect(parentheses.body).to.be.eql(bodyAsVariable);
  });

  it('should have a body which is a application when constructed with a parentheses', function () {
    var bodyContentAsApplication = 'x y';
    var parenthesesContent = '(' + bodyContentAsApplication + ')';
    var parentheses = new Parentheses(parenthesesContent);
    expect(parentheses.body).to.be.an.instanceOf(Application);
    var bodyAsVariable = new Application(bodyContentAsApplication);
    expect(parentheses.body).to.be.eql(bodyAsVariable);
  });

  it('should have a body which is parentheses when constructed with a parentheses', function () {
    var bodyContentAsParentheses = '(x)';
    var parenthesesContent = '(' + bodyContentAsParentheses + ')';
    var parentheses = new Parentheses(parenthesesContent);
    expect(parentheses.body).to.be.an.instanceOf(Parentheses);
    var bodyAsVariable = new Parentheses(bodyContentAsParentheses);
    expect(parentheses.body).to.be.eql(bodyAsVariable);
  });
});
