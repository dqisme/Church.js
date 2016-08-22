var LambdaTerm = require('../src/LambdaTerm');
var Variable = require('../src/Variable');

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
});
