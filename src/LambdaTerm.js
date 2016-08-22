var Variable = require('./Variable');
var Abstraction = require('./Abstraction');
var Application = require('../src/Application');
var Parentheses = require('../src/Parentheses');

var LambdaTerm = function (content) {
  var lambdaTerm = new Variable(content);
  if (lambdaTerm.valid) {
    return lambdaTerm;
  }
  lambdaTerm = new Parentheses(content);
  if (lambdaTerm.valid) {
    return lambdaTerm;
  }
  lambdaTerm = new Abstraction(content);
  if (lambdaTerm.valid) {
    return lambdaTerm;
  }
  lambdaTerm = new Application(content);
  if (lambdaTerm.valid) {
    return lambdaTerm;
  }
};

module.exports = LambdaTerm;
