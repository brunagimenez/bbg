const errorMap = {
    NOT_FOUND: 404,
    INVALID_VALUE: 422,
    USER_VALID: 200
  };
  
  const mapError = (type) => errorMap[type] || 500;
  
  module.exports = {
    errorMap,
    mapError,
  };