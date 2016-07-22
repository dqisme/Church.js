var LambdaTerm = require('./LambdaTerm');

var Application = function (content) {
  this.content = content;
  try {
    if (!this.form.test(content)) {
      throw new Error('content is NOT a abstraction');
    }
  } catch (error) {
    this.error = error;
  }
};

var applicationForm = /^(.+?) (.+?)$/;
Application.prototype = new LambdaTerm(applicationForm);

module.exports = Application;
