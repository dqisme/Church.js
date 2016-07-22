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
});
