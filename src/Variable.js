var LambdaTerm = require('./LambdaTerm');

var Variable = function (content) {
  var form = /^[a-zA-Z]+$/;
  this.constructor(form, content);
};

Variable.prototype = new LambdaTerm();

module.exports = Variable;
