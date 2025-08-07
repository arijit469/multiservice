const express = require("express");
const router = express.Router();
const Provider = require("../models/Provider");
const { body, validationResult } = require("express-validator");
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage : storage });

// upload.single('image'),
//controler
router.post("/createProvider", async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  const { email, service } = req.body;
  try {
    // Find provider by email and check service
    const user = await Provider.findOne({ email });
    if (user) {
      if (user.service == service) {
        return res.status(200).json({ success, message: 'Service already exists with this email' });
      }
    } else {
      const newProvider = await Provider.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        gender: req.body.gender,
        service: req.body.service,
        your_time: req.body.your_time,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
        pincode: req.body.pincode,
        // image: req.file.originalname
      });
      success = true;
      res.json({ success, message: "Provider created successfully" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
