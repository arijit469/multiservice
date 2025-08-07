const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/fetchContact", async (req, res) => {
  let success = false;
  try {
    const contact = await Contact.find();
    if (contact.length > 0) {
      success = true;
      return res.status(200).json({ success, message: "Contact Request found", contactList: contact });
    } else {
      return res.status(200).json({ success, message: "No Contact Request found" });
    }
  } catch (error) {
    console.error("Fetch Contact error:", error);
    return res.status(500).json({ success, message: "Fetch Contact failed" });
  }
});

module.exports = router;
