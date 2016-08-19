var LambdaTerm = require('./LambdaTerm');
var Variable = require('./Variable');

var Abstraction = function (content) {
  var form = /^&(.+?)\.(.+?)$/;
  var self = this;
  var mutator = function (terms) {
    self.boundVariable = new Variable(terms[1]);
    var validLambdaTerm = new Variable(terms[2]);
    if (!validLambdaTerm.valid) {
      validLambdaTerm = new Abstraction(terms[2]);
    }
    self.body = validLambdaTerm;
  };
  this.constructor(form, content, mutator);
};

Abstraction.prototype = new LambdaTerm();

module.exports = Abstraction;
