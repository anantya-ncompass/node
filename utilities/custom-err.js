class CustomError extends Error {
  constructor(message) {
    this.message = message;
  }
  static badRequest(message) {
    return new CustomError(message);
  }
}

module.exports = CustomError;