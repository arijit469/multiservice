const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { body, validationResult } = require("express-validator");

router.post("/contactUs", 
 async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

      try {
        newContactUs = await Contact.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
        });
        success = true;
        return res.status(200).json({ success, message: 'contact successful' });
      
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }

});

module.exports = router;
