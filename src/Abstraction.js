var LambdaTerm = require('./LambdaTerm');
var Variable = require('./Variable');
var Application = require('./Application');
var Parentheses = require('./Parentheses');

var Abstraction = function (content) {
  var form = /^&(.+?)\.(.+?)$/;
  var self = this;
  var mutator = function (terms) {
    self.boundVariable = new Variable(terms[1]);
    [Variable, Abstraction, Application, Parentheses].some(function (LambdaTermType) {
      var lambdaTerm = new LambdaTermType(terms[2]);
      if (lambdaTerm.valid) {
        self.body = lambdaTerm;
        return true;
      }
    })
  };
  this.constructor(form, content, mutator);
};

Abstraction.prototype = new LambdaTerm();

module.exports = Abstraction;
