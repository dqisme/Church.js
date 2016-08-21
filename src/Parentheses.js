var LambdaTermType = require('./LambdaTermType');

var Parentheses = function (content) {
  var form = /^\((.+?)\)$/;
  var self = this;
  var mutator = function (terms) {
    var Variable = require('./Variable');
    var Abstraction = require('./Abstraction');
    var Application = require('./Application');
    [Variable, Abstraction, Application, Parentheses].some(function (LambdaTermType) {
      var lambdaTerm = new LambdaTermType(terms[1]);
      if (lambdaTerm.valid) {
        self.body = lambdaTerm;
        return true;
      }
    });
  };
  this.constructor(form, content, mutator);
};

Parentheses.prototype = new LambdaTermType();

module.exports = Parentheses;
