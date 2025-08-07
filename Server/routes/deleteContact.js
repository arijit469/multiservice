const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.delete("/deleteContact", async (req, res) => {
  const { email } = req.body;
  let success = false;
  try {
    const result = await Contact.deleteOne({ email });

    if (result.deletedCount > 0) {
      success = true;
      return res.status(200).json({ success, message: "Contact deleted successfully" });
    } else {
      return res.status(404).json({ success, message: "Contact not found" });
    }
  } catch (error) {
    console.error("Delete Contact error:", error);
    return res.status(500).json({ success, message: "Delete Contact failed" });
  }
});

module.exports = router;
