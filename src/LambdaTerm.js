var LambdaTerm = function (form, content, mutator) {
  form = form || /^.*$/;
  this.content = content;
  if (!form.test(content)) {
    this.error = 'content is NOT a valid lambda term';
  } else if (typeof mutator === 'function') {
    mutator(form.exec(content));
  }
};

module.exports = LambdaTerm;
