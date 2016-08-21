var LambdaTermType = require('./LambdaTermType');

var Variable = function (content) {
  var form = /^[a-zA-Z]+$/;
  this.constructor(form, content);
};

Variable.prototype = new LambdaTermType();

module.exports = Variable;
