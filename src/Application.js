var LambdaTerm = require('./LambdaTerm');

var Application = function (content) {
  var form = /^(.+?) (.+?)$/;
  this.content = content;
  var self = this;
  var mutator = function (terms) {
    self.function = terms[1];
    self.argument = terms[2];
  }
  this.constructor(form, content, mutator);
};

Application.prototype = new LambdaTerm();

module.exports = Application;
