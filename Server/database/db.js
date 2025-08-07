const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;

const Connection = async () => {
 
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database ✅');
  } catch (error) {
    console.log("Database connection failed ", error);
  }
};

module.exports = Connection;
