var Variable = require('./Variable');

var LambdaTerm = function (content) {
  return new Variable(content);
};

module.exports = LambdaTerm;
