var tokens = {
  IDENTIFIER: '[\\w\\d]+',
  ABSTRACTION: '&(.)\\.(.)',
};

var TokenRegExp = function (token) {
  return new RegExp('^(' + token + ')$');
};

var church = {
  isIdentifier: function (input) {
    return new TokenRegExp(tokens.IDENTIFIER).test(input);
  },
  isAbstraction: function (input) {
    return new TokenRegExp(tokens.ABSTRACTION).test(input);
  }
};

module.exports = church;
