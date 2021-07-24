const ErrorResponse = require("../utils/errorResponse");

const errorHandler =  (err, req, res, next) => {
  let error = { ...err };  

  // log to console for dev
  console.log(`Error in middleware/error.js errorHandler`.brightRed, error); 
  console.log(`Error in middleware/error.js errorHandler ${err.errmsg}`.brightRed ); 

  error.message = err.message;
   
  // Mongoose bad ObjectId
  if (err.name === 'CastError') {  // id not formatted properly
    const message = `Resource not found with id of ${err.errmsg}`;
   
    console.log(`Custom Response Error message`.red, message);
    error = new ErrorResponse(message, 404); 
  }

  // Mongoose duplicate key
  if (err.name === 'MongoError' && err.code === 11000) { 
    const message = `Record with this id allready exists - ${err.errmsg.substring(err.errmsg.indexOf('{'))}`;
   
    console.log(`Custom Response Error message`.red, message);
    error = new ErrorResponse(message, 400); // bad request 
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
   
    console.log(`Custom Response Error message`.red, message);
    error = new ErrorResponse(message, 400); // bad request 
  }

  res.status(error.statusCode || 500).json({ 
    success: false,
    error: error.message || 'Sever Error'
  });
}

module.exports = errorHandler;