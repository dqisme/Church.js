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

  it('should have error when constructed with a non-application content', function () {
    var nonApplicationContent = 'x';
    var application = new Application(nonApplicationContent);
    expect(application).to.have.property('error');
  });

  it('should have a function property when constructed with a application', function () {
    var applicationContent = 'x x';
    var application = new Application(applicationContent);
    expect(application).to.have.property('function');
  });
});
