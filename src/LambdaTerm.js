var LambdaTerm = function (form, content, mutator) {
  this.form = form || /^.*$/;
  this.content = content;
  try {
    if (!this.form.test(content)) {
      throw new Error('content is NOT a valid lambda term');
    } else if (typeof mutator === 'function') {
      mutator(this.form.exec(content));
    }
  } catch (error) {
    if(error) {
      this.error = error;
    }
  }
};

module.exports = LambdaTerm;
