var Recognizer = require('../src/recognizer');

describe('test recognizer', function () {

  it('should be a class', function () {
    expect(Recognizer).to.be.a('function');
  });

  it('should can be constructed with a form', function () {
    var form = 'foo';
    var recognizer = new Recognizer(form);
    expect(recognizer.form).to.be.equal(form);
  });
});
