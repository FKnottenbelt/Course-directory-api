const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: true
  });

  console.log(`MonogoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
 }

module.exports = connectDB;
