const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
//const connectDB = require('./config/db');  // connect via atlas
const connectDB = require('./config/docker_db');
const colors = require('colors');
const errorHandler = require('./middleware/error'); 

// Load env vars
dotenv.config({ path: './config/config.env'});

// Connect to database
connectDB();

// Routes files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

const app = express();

// Body parser
app.use(express.json());

// Dev loging middelware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

// Middleware for router error handling
app.use(errorHandler);                                                                                                                  

// Server
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process (code 1)
  server.close(() => process.exit(1));
});