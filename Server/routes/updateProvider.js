const express = require("express");
const router = express.Router();
const Provider = require("../models/Provider");
const { body, validationResult } = require("express-validator");

router.put("/updateProvider",
  [
    body("_id").notEmpty().withMessage("Provider ID is required"),
    // Add validation rules for other fields as needed
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    const { _id } = req.body;
    try {
      let provider = await Provider.findOne({ _id });
      
      if (provider) {
        provider.name = req.body.name;
        provider.email = req.body.email;
        provider.mobile = req.body.mobile;
        provider.gender = req.body.gender;
        provider.service = req.body.service;
        provider.your_time = req.body.your_time;
        provider.address = req.body.address;
        provider.state = req.body.state;
        provider.city = req.body.city;
        provider.pincode = req.body.pincode;
        
        const updatedProvider = await provider.save();
        
        return res.status(200).json({
          success: true,
          message: "Provider updated successfully",
          provider: updatedProvider,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Provider not found",
        });
      }
    } catch (error) {
      console.error("Update Provider error:", error);
      return res
      .status(500)
      .json({ success: false, message: "Update Provider failed" });
    }
  }
  );
  
  module.exports = router;


  
  // router.put("/updateProvider", async (req, res) => {
  //     let success = false;
  //     const errors = validationResult(req);
  //     if (!errors.isEmpty()) {
  //       return res.status(400).json({ success, errors: errors.array() });
  //     }
  //     const { _id } = req.body;
  //     try {
  //       let provider = await Provider.findOne({ _id });
    
  //       if (provider) {
  //         provider.name = req.body.name;
  //         provider.email = req.body.email;
  //         provider.mobile = req.body.mobile;
  //         provider.gender = req.body.gender;
  //         provider.service = req.body.service;
  //         provider.your_time = req.body.your_time;
  //         provider.address = req.body.address;
  //         provider.state = req.body.state;
  //         provider.city = req.body.city;
  //         provider.pincode = req.body.pincode;
  //         // provider.image = req.file ? req.file.originalname : provider.image;
    
  //         const updatedProvider = await provider.save();
    
  //         return res.status(200).json({ success: true, message: "Provider updated successfully", provider: updatedProvider });
  //       } else {
  //         return res.status(404).json({ success: false, message: "Provider not found" });
  //       }
  //     } catch (error) {
  //       console.error("Update Provider error:", error);
  //       return res.status(500).json({ success: false, message: "Update Provider failed" });
  //     }
  //   });