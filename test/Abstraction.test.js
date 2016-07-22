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
});
