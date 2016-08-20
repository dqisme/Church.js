var Variable = require('../src/Variable');
var Abstraction = require('../src/Abstraction');
var Application = require('../src/Application');
var Parentheses = require('../src/Parentheses');

describe('Application', function () {
  it('should be a function', function () {
    expect(Application).to.be.a('function');
  });

  it('should can be constructed with its content', function () {
    var content = '&x.x';
    var application = new Application(content);
    expect(application).to.have.property('content');
    expect(application).to.have.property('valid');
    expect(application.content).to.be.equal(content);
  });

  it('should be invalid when constructed with a non-application content', function () {
    var nonApplicationContent = 'x';
    var application = new Application(nonApplicationContent);
    expect(application.valid).to.be.false;
  });

  it('should have a function and a argument properties when constructed with a application', function () {
    var applicationContent = 'x x';
    var application = new Application(applicationContent);
    expect(application).to.have.property('function');
    expect(application).to.have.property('argument');
  });

  it('should have a function which can be a variable when constructed with a application', function () {
    var functionContentAsVariable = 'x';
    var applicationContent = functionContentAsVariable + ' y';
    var application = new Application(applicationContent);
    expect(application.function).to.be.an.instanceOf(Variable);
    var functionAsVariable = new Variable(functionContentAsVariable);
    expect(application.function).to.be.eql(functionAsVariable);
  });

  it('should have a function which can be a abstraction when constructed with a application', function () {
    var functionContentAsAbstraction = '&x.x';
    var applicationContent = functionContentAsAbstraction + ' y';
    var application = new Application(applicationContent);
    expect(application.function).to.be.an.instanceOf(Abstraction);
    var functionAsAbstraction = new Abstraction(functionContentAsAbstraction);
    expect(application.function).to.be.eql(functionAsAbstraction);
  });

  it('should have a function which can be parentheses when constructed with a application', function () {
    var functionContentAsParentheses = '(x)';
    var applicationContent = functionContentAsParentheses + ' y';
    var application = new Application(applicationContent);
    expect(application.function).to.be.an.instanceOf(Parentheses);
    var functionAsParentheses = new Parentheses(functionContentAsParentheses);
    expect(application.function).to.be.eql(functionAsParentheses);
  });
});
