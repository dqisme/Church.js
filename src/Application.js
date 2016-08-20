var LambdaTerm = require('./LambdaTerm');

var Application = function (content) {
  var form = /^(.+?) (.+?)$/;
  this.content = content;
  var self = this;
  var mutator = function (terms) {
    var Variable = require('./Variable');
    var Abstraction = require('./Abstraction');
    var Parentheses = require('./Parentheses');
    var schema = {
      function: terms[1],
      argument: terms[2]
    };
    Object.keys(schema).forEach(function (property) {
      [Variable, Abstraction, Application, Parentheses].some(function (LambdaTermType) {
        var lambdaTerm = new LambdaTermType(schema[property]);
        if (lambdaTerm.valid) {
          self[property] = lambdaTerm;
          return true;
        }
      });
    });
  };
  this.constructor(form, content, mutator);
};

Application.prototype = new LambdaTerm();

module.exports = Application;
