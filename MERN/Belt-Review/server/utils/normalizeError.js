import extractValidationErrors from './ErrorExtractor.js';

const normalizeError = (err) => {
  const normalized = {
    name: err.name || 'Server Error',
    statusCode: err.statusCode || 500,
    message: err.message || 'Something went wrong',
    validations: {},
  };
   //console.log(err.name)
  if (err.name === 'ValidationError') {
    normalized.statusCode = 400;  
    const errors = extractValidationErrors(err);
    if (Object.keys(errors).length) {
      normalized.validations = errors;
    }
  }

  return normalized;
};

export default normalizeError;
