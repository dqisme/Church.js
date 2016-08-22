var Variable = require('./Variable');
var Abstraction = require('./Abstraction');
var Application = require('../src/Application');
var Parentheses = require('../src/Parentheses');

var LambdaTerm = function (content) {
  var finalLambdaTerm = {
    content: content,
    valid: false
  };
  [Variable, Parentheses, Abstraction, Application].some(function (LambdaTermType) {
    var lambdaTerm = new LambdaTermType(content);
    if (lambdaTerm.valid) {
      finalLambdaTerm = lambdaTerm;
      return true;
    }
  });
  return finalLambdaTerm;
};

module.exports = LambdaTerm;
