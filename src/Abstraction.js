var LambdaTermType = require('./LambdaTermType');
var Variable = require('./Variable');

var Abstraction = function (content) {
  var form = /^&(.+?)\.(.+?)$/;
  var self = this;
  var mutator = function (terms) {
    var LambdaTerm = require('./LambdaTerm');
    self.boundVariable = new Variable(terms[1]);
    self.body = new LambdaTerm(terms[2]);
  };
  return LambdaTermType(form, content, mutator);
};

module.exports = Abstraction;
