const express = require("express");
const router = express.Router();
const Provider = require("../models/Provider");

router.post("/fetchProvider", async (req, res) => {
  try {
    const providers = await Provider.find();
    return res.status(200).json({ success: true, message: "Providers found", providers });
  } catch (error) {
    console.error("Fetch Providers error:", error);
    return res.status(500).json({ success: false, message: "Fetch Providers failed" });
  }
});

module.exports = router;
