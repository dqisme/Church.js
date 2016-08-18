var Abstraction = require('../src/Abstraction');
var Variable = require('../src/Variable');

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

  it('should have a bound variable when constructed with a abstraction', function () {
    var abstractionContent = '&x.x';
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction).to.have.property('boundVariable');
  });

  it('should have a bound variable which can be constructed by variable', function () {
    var abstractionContent = '&x.x';
    var boundVariable = new Variable('x');
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.boundVariable).to.be.eql(boundVariable);
  });

  it('should have a body when constructed with a abstraction', function () {
    var abstractionContent = '&x.xyz';
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction).to.have.property('body');
  });
});
