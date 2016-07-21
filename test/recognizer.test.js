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

  describe('recognize by form', function () {

    it('should can be recognize a string by its form as a Regular Expression', function () {

      var form = /foo/;
      var string = 'foo';
      var wrongString = 'bar';
      var recognizer = new Recognizer(form);
      expect(recognizer.recognize(string)).to.be.true;
      expect(recognizer.recognize(wrongString)).to.be.not.true;
    });
  });
});
