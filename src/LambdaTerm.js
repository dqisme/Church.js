var Variable = require('./Variable');
var Abstraction = require('./Abstraction');

var LambdaTerm = function (content) {
  var lambdaTerm = new Variable(content);
  if (lambdaTerm.valid) {
    return lambdaTerm;
  }
  lambdaTerm = new Abstraction(content);
  if (lambdaTerm.valid) {
    return lambdaTerm;
  }
};

module.exports = LambdaTerm;
