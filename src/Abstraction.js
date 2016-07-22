var LambdaTerm = require('./LambdaTerm');

var Abstraction = function (content) {
  this.content = content;
};

Abstraction.prototype = new LambdaTerm();

module.exports = Abstraction;
