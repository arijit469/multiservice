const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/fetchUser", async (req, res) => {
  let success = false;
  try {
    const users = await User.find();
    if (users.length > 0) {
      success = true;
      return res.status(200).json({ success, message: "User found", userList: users });
    } else {
      return res.status(200).json({ success, message: "No users found" });
    }
  } catch (error) {
    console.error("Fetch User error:", error);
    return res.status(500).json({ success, message: "Fetch User failed" });
  }
});

module.exports = router;
