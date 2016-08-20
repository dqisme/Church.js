var LambdaTerm = require('./LambdaTerm');

var Application = function (content) {
  var form = /^(.+?) (.+?)$/;
  this.content = content;
  var self = this;
  var mutator = function (terms) {
    var Variable = require('./Variable');
    var Abstraction = require('./Abstraction');
    var Parentheses = require('./Parentheses');
    [Variable, Abstraction, Application, Parentheses].some(function (LambdaTermType) {
      var lambdaTerm = new LambdaTermType(terms[1]);
      if (lambdaTerm.valid) {
        self.function = lambdaTerm;
        return true;
      }
    });
    self.argument = terms[2];
  }
  this.constructor(form, content, mutator);
};

Application.prototype = new LambdaTerm();

module.exports = Application;
