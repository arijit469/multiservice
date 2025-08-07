const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.delete("/deleteUser", async (req, res) => {
  const { email } = req.body;
  let success = false;
  try {
    const user = await User.findOneAndDelete({ email });

    if (user) {
      success = true;
      return res.status(200).json({ success, message: "User deleted successfully" });
    } else {
      return res.status(404).json({ success, message: "User not found" });
    }
  } catch (error) {
    console.error("Delete User error:", error);
    return res.status(500).json({ success, message: "Delete User failed" });
  }
});

module.exports = router;
