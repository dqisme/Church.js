var util = require('util');
var LambdaTerm = require('./LambdaTerm');

var SCombinator = new LambdaTerm('(&x.(&y.(&z.(x z (y z)))))');
console.log(util.inspect(SCombinator, { depth: null }));
