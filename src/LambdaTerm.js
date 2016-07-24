var LambdaTerm = function (form, content, mutator) {
  this.form = form || /^.*$/;
  this.content = content;
  if (!this.form.test(content)) {
    this.error = 'content is NOT a valid lambda term';
  } else if (typeof mutator === 'function') {
    mutator(this.form.exec(content));
  }
};

module.exports = LambdaTerm;
