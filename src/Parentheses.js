var LambdaTermType = require('./LambdaTermType');

var Parentheses = function (content) {
  var form = /^\((.+?)\)$/;
  var self = this;
  var mutator = function (terms) {
    var LambdaTerm = require('./LambdaTerm');
    self.body = new LambdaTerm(terms[1]);
  };
  this.constructor(form, content, mutator);
};

Parentheses.prototype = new LambdaTermType();

module.exports = Parentheses;
