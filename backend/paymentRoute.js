const express = require("express");
const router = express.Router();
const paymentController = require("./payment.controller"); // path should be correct

router.post("/api/payment", paymentController.createOrder);

module.exports = router;
