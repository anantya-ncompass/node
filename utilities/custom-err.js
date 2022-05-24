class CustomError extends Error {
  constructor(message) {
    super(message);
  }
  static badRequest(message) {
    return new CustomError(message);
  }
}

module.exports = CustomError;