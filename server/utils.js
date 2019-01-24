
function InvalidDataError(message) {
  this.name = 'InvalidDataError';
  this.message = message || 'Сообщение по умолчанию';
  // this.stack = (new Error()).stack;
}
InvalidDataError.prototype = Object.create(Error.prototype);
InvalidDataError.prototype.constructor = InvalidDataError;


module.exports = {
  InvalidDataError: InvalidDataError
}