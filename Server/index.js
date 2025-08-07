const express = require('express');
const dotenv = require("dotenv");
const app = express();
const PORT = 8000;
const cors = require('cors');
const bodyPerser =require('body-parser');

const Connection = require("./database/db");
const bodyParser = require('body-parser');
dotenv.config();

app.use(express.json());
app.use(cors()); //cors use

//bodyParser use
app.use(bodyParser.json({extended :true}));
app.use(bodyParser.urlencoded({extended :true}));

app.use('/api/auth', require('./routes/auth'));
app.use ('/uploade', express.static('uploads'));
app.use('/api/buisnessProvider', require('./routes/buisnessProvider'));
app.use('/api/contactUs', require("./routes/contactUs"));
app.use('/api/serviceSearching', require('./routes/serviceSearching'));
//register & login for admin
app.use('/api/CreateAdmin', require('./routes/AdminAuth'));
app.use('/api/Adminlogin', require('./routes/AdminAuth'));

//fetch apis for admin
app.use('/api/fetchUser', require('./routes/fetchUser'));
app.use('/api/fetchContact', require('./routes/fetchContact'));
app.use('/api/fetchProvider', require('./routes/fetchProvider'));
//delete apis for admin
app.use('/api/deleteContact', require('./routes/deleteContact'));
app.use('/api/deleteUser', require('./routes/deleteUser'));
app.use('/api/deleteProvider',require('./routes/deleteProvider'));
//update apis for admin
app.use("/api/updateUser", require("./routes/updateUser"));


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port No ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the server:", error);
  });
