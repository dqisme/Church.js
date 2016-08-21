var LambdaTermType = require('../src/LambdaTermType');

describe('Lambda Term Type', function () {
  it('should be a function', function () {
    expect(LambdaTermType).to.be.a('function');
  });
  it('should can be constructed by its form and content', function () {
    var form = /foo/;
    var content = 'xxx';
    var lambdaTerm = new LambdaTermType(form, content);
    expect(lambdaTerm).to.have.property('content');
    expect(lambdaTerm).to.have.property('valid');
    expect(lambdaTerm.content).to.be.equal(content);
  });
});
