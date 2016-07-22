var LambdaTerm = require('./LambdaTerm');

var Application = function (content) {
  this.content = content;
};

Application.prototype = new LambdaTerm();

module.exports = Application;
