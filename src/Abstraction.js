var LambdaTerm = require('./LambdaTerm');
var Variable = require('./Variable');

var Abstraction = function (content) {
  var form = /^&(.+?)\.(.+?)$/;
  var self = this;
  var mutator = function (terms) {
    self.boundVariable = new Variable(terms[1]);
    self.body = terms[2];
  };
  this.constructor(form, content, mutator);
};

Abstraction.prototype = new LambdaTerm();

module.exports = Abstraction;
