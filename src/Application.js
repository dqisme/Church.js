var LambdaTerm = require('./LambdaTerm');

var Application = function (content) {
  this.content = content;
};

var applicationForm = /^(.+?) (.+?)$/;
Application.prototype = new LambdaTerm(applicationForm);

module.exports = Application;
