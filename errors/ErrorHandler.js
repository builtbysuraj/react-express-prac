class ErrorHandler {
  constructor (status, msg) {
    this.status = status
    this.message = msg
  }

  static forbidden(message = "Not allowed") {
    return new ErrorHandler(403, message)
  }
}

module.exports = ErrorHandler