require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Connection = require("./database/db");

const app = express();

// Use PORT from env (Render) or fallback to 8000 (local)
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors()); // Allow frontend requests
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/uploade', express.static('uploads'));
app.use('/api/buisnessProvider', require('./routes/buisnessProvider'));
app.use('/api/contactUs', require("./routes/contactUs"));
app.use('/api/serviceSearching', require('./routes/serviceSearching'));

// Admin authentication
app.use('/api/CreateAdmin', require('./routes/AdminAuth'));
app.use('/api/Adminlogin', require('./routes/AdminAuth'));

// Admin fetch APIs
app.use('/api/fetchUser', require('./routes/fetchUser'));
app.use('/api/fetchContact', require('./routes/fetchContact'));
app.use('/api/fetchProvider', require('./routes/fetchProvider'));

// Admin delete APIs
app.use('/api/deleteContact', require('./routes/deleteContact'));
app.use('/api/deleteUser', require('./routes/deleteUser'));
app.use('/api/deleteProvider', require('./routes/deleteProvider'));

// Admin update APIs
app.use("/api/updateUser", require("./routes/updateUser"));

// Database connection & server start
Connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ Error connecting to the server:", error);
  });
