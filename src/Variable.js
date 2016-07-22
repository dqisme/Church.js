var LambdaTerm = require('./LambdaTerm');

var Variable = function (content) {
  this.content = content;
  try {
    if (!this.form.test(content)) {
      throw new Error('content is NOT a variable');
    }
  } catch (error) {
    if(error) {
      this.error = error;
    }
  }
};

var variableForm = /^[a-zA-Z]+$/;
Variable.prototype = new LambdaTerm(variableForm);

module.exports = Variable;
