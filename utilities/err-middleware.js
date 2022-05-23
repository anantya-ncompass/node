const CustomError = require("./custom-err");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
    return;
  }
  res.status(500);
  res.json({
    success: false,
    message: err.message,
  });
};
module.exports = {
  errorHandler,
};