var LambdaTerm = require('../src/LambdaTerm');

describe('Lambda Term', function () {
  it('should be a function', function () {
    expect(LambdaTerm).to.be.a('function');
  });
  it('should can be constructed by its form and content', function () {
    var form = /foo/;
    var content = 'xxx';
    var lambdaTerm = new LambdaTerm(form, content);
    expect(lambdaTerm).to.have.property('form');
    expect(lambdaTerm).to.have.property('content');
    expect(lambdaTerm.form).to.be.eql(form);
    expect(lambdaTerm.content).to.be.equal(content);
  });
});
