var LambdaTerm = function (form, content, mutator) {
  form = form || /^.*$/;
  this.content = content;
  this.valid = form.test(content);
  if (this.valid && typeof mutator === 'function') {
    mutator(form.exec(content));
  }
};

module.exports = LambdaTerm;
