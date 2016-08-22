var LambdaTermType = require('./LambdaTermType');

var Application = function (content) {
  var form = /^(.+?) (.+?)$/;
  this.content = content;
  var self = this;
  var mutator = function (terms) {
    var LambdaTerm = require('./LambdaTerm');
    self.function = new LambdaTerm(terms[1]);
    self.argument = new LambdaTerm(terms[2]);
  };
  this.constructor(form, content, mutator);
};

Application.prototype = new LambdaTermType();

module.exports = Application;
