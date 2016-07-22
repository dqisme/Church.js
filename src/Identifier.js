var LambdaTerm = require('./LambdaTerm');

var Identifier = function (content) {
  this.content = content;
};

var identifier_form = /\w+/;
Identifier.prototype = new LambdaTerm(identifier_form);

module.exports = Identifier;
