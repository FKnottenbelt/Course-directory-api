const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb://localhost:27017/CourseDirectoryApi_db', {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: true
  });

  console.log(`MonogoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
 }

module.exports = connectDB;
