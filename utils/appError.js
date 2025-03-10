// Description: This file contains the error handling class for the application.
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // This property is used to determine if the error is operational or not.

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
