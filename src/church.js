var tokens = {
  IDENTIFIER: '[\\w\\d]+',
  ABSTRACTION: '&(.+)\\.(.+)',
  APPLICATION: '(.+?) (.+?)',
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
  },
  isApplication: function (input) {
    return new TokenRegExp(tokens.APPLICATION).test(input);
  }
};

module.exports = church;
