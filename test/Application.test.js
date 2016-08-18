var Application = require('../src/Application');

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

  it('should have function and argument properties when constructed with a application', function () {
    var applicationContent = 'x x';
    var application = new Application(applicationContent);
    expect(application).to.have.property('function');
    expect(application).to.have.property('argument');
  });
});
