const express = require("express");
const router = express.Router();
const Provider = require("../models/Provider");

router.post("/searchProvider", async (req, res) => {
  const { service, pincode } = req.body;

  try {
    const provider = await Provider.find();
    let providerList = [];
    if (provider) {
      if (pincode == "" && service == "") {
        providerList = provider;
      } else if (pincode != "" && service == "") {
        provider.forEach((element) => {
          if (element.pincode == pincode) {
            providerList.push(element);
          }
        });
      } else if (pincode == "" && service != "") {
        provider.forEach((element) => {
          if (element.service == service) {
            providerList.push(element);
          }
        });
      } else {
        provider.forEach((element) => {
          if (element.service == service && element.pincode == pincode) {
            providerList.push(element);
          }
        });
      }

      return res
        .status(200)
        .json({
          message:
            providerList.length > 0 ? "Provider found" : "Provider not found",
          providerList,
        });
    } else {
      return res.status(200).json({ message: "Provider not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
