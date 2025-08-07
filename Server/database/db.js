const mongoose = require('mongoose');

const Connection = async (username, password) => {

  //const url = `mongodb+srv://${username}:${password}@handtohelp.n9hdk58.mongodb.net/?retryWrites=true&w=majority`;
  const url = `mongodb+srv://${username}:${password}@cluster0.gwjpvr3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database ✅');
  } catch (error) {
    console.log("Database connection failed ", error);
  }
};

module.exports = Connection;
