var Application = require('../src/Application');

describe('Application', function () {
  it('should be a function', function () {
    expect(Application).to.be.a('function');
  });

  it('should can be constructed with its content', function () {
    var content = '&x.x';
    var application = new Application(content);
    expect(application).to.have.property('content');
    expect(application.content).to.be.equal(content);
  });

  it('should have form inherited from LambdaTerm', function () {
    var application = new Application();
    expect(application).to.have.property('form');
  });

  it('should have form as regular expression for application', function () {
    var applicationForm = /^(.+?) (.+?)$/;
    var application = new Application();
    expect(application.form).to.be.eql(applicationForm);
  });
});
