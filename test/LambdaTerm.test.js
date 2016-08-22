var LambdaTerm = require('../src/LambdaTerm');
var Variable = require('../src/Variable');
var Abstraction = require('../src/Abstraction');
var Application = require('../src/Application');
var Parentheses = require('../src/Parentheses');

describe('Lambda Term', function () {
  it('should be a function', function () {
    expect(LambdaTerm).to.be.a('function');
  });

  it('should can be constructed to a Variable', function () {
    var content = 'x';
    var lambdaTerm = new LambdaTerm(content);
    var variable = new Variable(content);
    expect(lambdaTerm).to.be.eql(variable);
  });

  it('should can be constructed to a Abstraction', function () {
    var content = '&x.x';
    var lambdaTerm = new LambdaTerm(content);
    var abstraction = new Abstraction(content);
    expect(lambdaTerm).to.be.eql(abstraction);
  });

  it('should can be constructed to a Application', function () {
    var content = 'x y';
    var lambdaTerm = new LambdaTerm(content);
    var application = new Application(content);
    expect(lambdaTerm).to.be.eql(application);
  });

  it('should can be constructed to Parentheses', function () {
    var content = '(x)';
    var lambdaTerm = new LambdaTerm(content);
    var parentheses = new Parentheses(content);
    expect(lambdaTerm).to.be.eql(parentheses);
  });
});
