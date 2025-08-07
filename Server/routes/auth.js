const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//End point for register user(localhost:8000/api/auth/createuser)
router.post( "/createuser",
  [
    body("name", "Name must be 3 character , ").isLength({ min: 3 }),
    body("email", "Enter a valid email , ").isEmail(),
    body("password", " password must be 5 character ").isLength({min: 5,
    }),
  ],
  //give error if user make bad requests
  async (req, res) => {
    let success=false;
    try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Extract the error messages from the validationResult
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(200).json({ message: errorMessages });
    }
  

    //chaking if email allready exixt
   
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(200).json({success, message: "user with this email allready exist" });
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      success = true;
      return res.status(200).json({ success, message: 'Register successful' });
    
    }
    catch (error) {
      console.error(error.message);
      return res.status(500).json({ success, message: 'Register failed' });
    }
  }
);

//End point for Login user(localhost:8000/api/auth/login)
router.post( "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", " password can not be blank").exists(),
  ],
  
        //give error if user make bad request
        async (req, res) => {
          let success=false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({success, errors: errors.array() });
        }
      const { email, password } = req.body;
      try {
        // Find user by email and check password
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(200).json({ success ,message: 'Invalid Credentials' });
        }
    
        if (user.password !== password) {
          return res.status(200).json({ success, message: 'Invalid Credentials' });
          
        }
    
        // Login successful
        success=true;
        return res.status(200).json({ success, message: 'Login successful' });
      } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ success, message: 'Login failed' });
        }
  })


module.exports = router;
