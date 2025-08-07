const express = require("express");
const router = express.Router();
const User = require("../models/User");



router.put("/updateUser", async (req, res) => {
  const { _id ,name, email, password } = req.body;
  try {
    let user = await User.findOne({ _id });

    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;

      const updatedUser = await user.save();

      return res.status(200).json({ success: true, message: "User updated successfully", user: updatedUser });
    } else {
      return res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Update User error:", error);
    return res.status(500).json({ success: false, message: "Update User failed" });
  }
});

router.put("/updateUser", async (req, res) => {
  try {
      await User.updateMany({ _id: req.body._id }, {
          $set: {
              name: req.body.name,
              mobile: req.body.mobile,
              email: req.body.email,
              Service: req.body.Service,
              gender: req.body.gender,
              address: req.body.address,
              state: req.body.state,
              city: req.body.city,
              pincode: req.body.pincode,
              your_time: req.body.your_time,

          }
      })
      res.status(201).json('successfully updated')
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
})
module.exports = router;