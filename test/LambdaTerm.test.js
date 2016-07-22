var LambdaTerm = require('../src/LambdaTerm');

describe('Lambda Term', function () {
  it('should be a function', function () {
    expect(LambdaTerm).to.be.a('function');
  });
  it('should can be constructed by its form', function () {
    var form = /foo/;
    var lambdaTerm = new LambdaTerm(form);
    expect(lambdaTerm).to.have.property('form');
    expect(lambdaTerm.form).to.be.eql(form);
  })
});
