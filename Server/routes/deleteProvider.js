const express = require("express");
const router = express.Router();
const Provider = require("../models/Provider");

router.delete("/deleteProvider", async (req, res) => {
    const { email } = req.body;
    let success = false;
    try {
      const result = await Provider.deleteOne({ email });
  
      if (result.deletedCount > 0) {
        success = true;
        return res.status(200).json({ success, message: "Provider deleted successfully" });
      } else {
        return res.status(404).json({ success, message: "Provider not found" });
      }
    } catch (error) {
      console.error("Delete Provider error:", error);
      return res.status(500).json({ success, message: "Delete Provider failed" });
    }
  });
  module.exports = router;