var tokens = {
  IDENTIFIER: '[\\w\\d]+',
};

var TokenRegExp = function (token) {
  return new RegExp('^(' + token + ')$');
};

var church = {
  isIdentifier: function (input) {
    return new TokenRegExp(tokens.IDENTIFIER).test(input);
  }
};

module.exports = church;
