var LambdaTerm = require('./LambdaTerm');

var Parentheses = function (content) {
  var form = /^\((.+?)\)$/;
  var self = this;
  var mutator = function (terms) {
    self.body = terms[1];
  };
  this.constructor(form, content, mutator);
};

Parentheses.prototype = new LambdaTerm();

module.exports = Parentheses;
