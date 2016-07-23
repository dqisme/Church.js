var LambdaTerm = require('./LambdaTerm');

var Variable = function (content) {
  var form = /^[a-zA-Z]+$/;
  this.constructor(form, content);
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

Variable.prototype = new LambdaTerm();

module.exports = Variable;
