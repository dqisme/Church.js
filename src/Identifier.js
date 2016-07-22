var LambdaTerm = require('./LambdaTerm');

var Identifier = function (content) {
  this.content = content;
};

Identifier.prototype = new LambdaTerm();

module.exports = Identifier;
