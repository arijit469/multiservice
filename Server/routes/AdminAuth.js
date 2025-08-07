const express = require("express");
const router = express.Router();
const Admin = require("../models/AdminAuth");
const { body, validationResult } = require("express-validator");

//End point for register admin(localhost:8000/api/auth/createadmin)
router.post( "/CreateAdmin",
  [
    body("name", "Enter a valid name ,minimum length 3").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password, minimum length 4").isLength({min: 5,
    }),
  ],
  //give error if admin make bad requests
  async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success , errors: errors.array() });
    }
    //chaking if email allready exixt
    try {
      let admin = await Admin.findOne({ email: req.body.email });
      if (admin) {
        return res.status(200).json({success, message: "admin with this email allready exist" });
      }
      admin = await Admin.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      success = true;
      return res.status(200).json({ success, message: 'Register successful' });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ success, message: 'Register failed' });
    }
  }
);

//End point for Login admin(localhost:8000/api/auth/Adminlogin)
router.post( "/Adminlogin",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", " password can not be blank").exists(),
  ],
  
        //give error if admin make bad request
        async (req, res) => {
          let success=false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({success, errors: errors.array() });
      }
      const { email, password } = req.body;
      try {
        // Find admin by email and check password
        const admin = await Admin.findOne({ email });
        if (!admin) {
          return res.status(200).json({ success ,message: 'Invalid Credentials' });
        }
    
        if (admin.password !== password) {
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
