var Recognizer = function(form) {
  this.form = form;
  this.recognize = function (string) {
    return this.form.test(string);
  }
};

module.exports = Recognizer;
