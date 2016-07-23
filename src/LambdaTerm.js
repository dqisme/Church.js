var LambdaTerm = function (form, content) {
  this.form = form || /^.*$/;
  this.content = content;
  try {
    if (!this.form.test(content)) {
      throw new Error('content is NOT a valid lambda term');
    }
  } catch (error) {
    if(error) {
      this.error = error;
    }
  }
};

module.exports = LambdaTerm;
