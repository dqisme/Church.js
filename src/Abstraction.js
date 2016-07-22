var LambdaTerm = require('./LambdaTerm');

var Abstraction = function (content) {
  this.content = content;
};

var abstractionForm = /^&(.+?)\.(.+?)$/;
Abstraction.prototype = new LambdaTerm(abstractionForm);

module.exports = Abstraction;
