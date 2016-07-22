var LambdaTerm = require('./LambdaTerm');

var Abstraction = function (content) {
  this.content = content;
  try {
    if (!this.form.test(content)) {
      throw new Error('content is NOT a abstraction');
    } else {
      this.boundVariable = this.form.exec(content)[1];
    }
  } catch (error) {
    this.error = error;
  }
};

var abstractionForm = /^&(.+?)\.(.+?)$/;
Abstraction.prototype = new LambdaTerm(abstractionForm);

module.exports = Abstraction;
