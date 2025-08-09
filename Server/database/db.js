const mongoose = require('mongoose');

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to the database');
  } catch (error) {
    console.log("❌ Database connection failed:", error);
  }
};

module.exports = Connection;
