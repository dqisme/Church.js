var LambdaTerm = require('./LambdaTerm');

var Application = function (content) {
  var form = /^(.+?) (.+?)$/;
  this.content = content;
  this.constructor(form, content);
};

Application.prototype = new LambdaTerm();

module.exports = Application;
