var Abstraction = require('../src/Abstraction');

describe('Abstraction', function () {

  it('should be a function', function () {
    expect(Abstraction).to.be.a('function');
  });

  it('should can be constructed with its content', function () {
    var content = '&x.x';
    var abstraction = new Abstraction(content);
    expect(abstraction).to.have.property('content');
    expect(abstraction.content).to.be.equal(content);
  });

  it('should have form inherited from LambdaTerm', function () {
    var abstraction = new Abstraction();
    expect(abstraction).to.have.property('form');
  });

  it('should have form as regular expression for abstraction', function () {
    var abstractionForm = /^&(.+?)\.(.+?)$/;
    var abstraction = new Abstraction();
    expect(abstraction.form).to.be.eql(abstractionForm);
  });

  it('should have error when constructed with a non-abstraction content', function () {
    var nonAbstractionContent = 'x';
    var abstraction = new Abstraction(nonAbstractionContent);
    expect(abstraction).to.have.property('error');
  });

  it('should have a bound variable when constructed with a abstraction', function () {
    var abstractionContent = '&x.x';
    var boundVariable = 'x';
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction).to.have.property('boundVariable');
    expect(abstraction.boundVariable).to.be.equal(boundVariable);
  });
});
