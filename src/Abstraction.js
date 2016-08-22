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
  this.constructor(form, content, mutator);
};

Abstraction.prototype = new LambdaTermType();

module.exports = Abstraction;
