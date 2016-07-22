var LambdaTerm = require('./LambdaTerm');

var Abstraction = function (content) {
  this.content = content;
  try {
    if (!this.form.test(content)) {
      throw new Error('content is NOT a abstraction');
    }
  } catch (error) {
    this.error = error;
  }
};

var abstractionForm = /^&(.+?)\.(.+?)$/;
Abstraction.prototype = new LambdaTerm(abstractionForm);

module.exports = Abstraction;
