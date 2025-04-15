const response = (res, statusCode, success, message, data = null, error = null) => {
    const sendResponse = { success, message };
    if (data) sendResponse.data = data;
    if (error) sendResponse.error = error;
  
    return res.status(statusCode).json(sendResponse);
  };
  
  export default response;
  