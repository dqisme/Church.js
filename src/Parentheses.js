var LambdaTerm = require('./LambdaTerm');

var Parentheses = function (content) {
  var form = /^\((.+?)\)$/;
  this.constructor(form, content);
};

Parentheses.prototype = new LambdaTerm();

module.exports = Parentheses;
