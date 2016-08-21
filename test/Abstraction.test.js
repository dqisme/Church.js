var Parentheses = require('../src/Parentheses');
var Application = require('../src/Application');
var Abstraction = require('../src/Abstraction');
var Variable = require('../src/Variable');
var LambdaTermType = require('../src/LambdaTermType');

describe('Abstraction', function () {

  it('should be a function', function () {
    expect(Abstraction).to.be.a('function');
  });

  it('should can be constructed with its content', function () {
    var content = '&x.x';
    var abstraction = new Abstraction(content);
    expect(abstraction).to.have.property('content');
    expect(abstraction).to.have.property('valid');
    expect(abstraction.content).to.be.equal(content);
  });

  it('should be invalid when constructed with a non-abstraction content', function () {
    var nonAbstractionContent = 'x';
    var abstraction = new Abstraction(nonAbstractionContent);
    expect(abstraction.valid).to.be.false;
  });

  it('should have a bound variable and a body when constructed with a abstraction', function () {
    var abstractionContent = '&x.x';
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction).to.have.property('boundVariable');
    expect(abstraction).to.have.property('body');
  });

  it('should have a bound variable which can be constructed by variable', function () {
    var boundVariableContent = 'x';
    var abstractionContent = '&' + boundVariableContent + '.y';
    var boundVariable = new Variable(boundVariableContent);
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.boundVariable).to.be.eql(boundVariable);
  });

  it('should have a body which is a lambda term when constructed with a abstraction', function () {
    var bodyContent = 'y';
    var abstractionContent = '&x.' + bodyContent;
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.body).to.be.an.instanceOf(LambdaTermType);
  });

  it('should have a body which is a variable when constructed with a abstraction', function () {
    var bodyContentAsVariable = 'y';
    var abstractionContent = '&x.' + bodyContentAsVariable;
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.body).to.be.an.instanceOf(Variable);
    var bodyAsVariable = new Variable(bodyContentAsVariable);
    expect(abstraction.body).to.be.eql(bodyAsVariable);
  });

  it('should have a body which is a abstraction when constructed with a abstraction', function () {
    var bodyContentAsAbstraction = '&x.y';
    var abstractionContent = '&x.' + bodyContentAsAbstraction;
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.body).to.be.an.instanceOf(Abstraction);
    var bodyAsVariable = new Abstraction(bodyContentAsAbstraction);
    expect(abstraction.body).to.be.eql(bodyAsVariable);
  });

  it('should have a body which is a application when constructed with a abstraction', function () {
    var bodyContentAsApplication = 'x y';
    var abstractionContent = '&x.' + bodyContentAsApplication;
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.body).to.be.an.instanceOf(Application);
    var bodyAsVariable = new Application(bodyContentAsApplication);
    expect(abstraction.body).to.be.eql(bodyAsVariable);
  });

  it('should have a body which is parentheses when constructed with a abstraction', function () {
    var bodyContentAsParentheses = '(x)';
    var abstractionContent = '&x.' + bodyContentAsParentheses;
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.body).to.be.an.instanceOf(Parentheses);
    var bodyAsVariable = new Parentheses(bodyContentAsParentheses);
    expect(abstraction.body).to.be.eql(bodyAsVariable);
  });
});
