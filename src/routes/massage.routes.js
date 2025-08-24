const express = require("express");
const router = express.Router();
const massageController = require("../controllers/massage.controller");

router.post("/", massageController.createMassage);

router.get("/", massageController.getMassages);

module.exports = router;
