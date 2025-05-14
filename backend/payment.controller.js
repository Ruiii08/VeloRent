require("dotenv").config();
const Razorpay = require("razorpay");

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});
 
const createOrder = async (req, res) => {
  try {
    const { pickupDate, dropoffDate, mode, duration, bikeType, price, baseAmount, securityDeposit, name, email } = req.body;

    if (!pickupDate || !dropoffDate || !bikeType || !price || !securityDeposit) {
      return res.status(400).json({ success: false, msg: "Missing required fields" });
    }

    const amount = price * 100; // Razorpay expects paise

    // ✅ Razorpay expects only amount, currency, receipt in options
    const options = {
      amount,
      currency: "INR",
      receipt: `veloRide_${Date.now()}`,
    };

    // Create the order
    console.log("Razorpay Key ID:", process.env.RAZORPAY_ID_KEY);
    razorpayInstance.orders.create(options, (err, order) => {
      if (err) {
        return res.status(400).send({ success: false, msg: "Razorpay error", err });
      }

      // ✅ Send only the details required for frontend
      return res.status(200).send({
        success: true,
        msg: "Order Created",
        order_id: order.id,
        amount,
        key_id: process.env.RAZORPAY_ID_KEY,
        bookingDetails: {
          pickupDate,
          dropoffDate,
          mode,
          duration,
          bikeType,
          baseAmount,
          securityDeposit, // ✅ Return it in booking details
          totalAmount: price,
        },
        contact: "9876543210",
        name: name||"Velo Customer",
        email: email||"customer@example.com",
      });
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error.message);
    return res.status(500).send({ success: false, msg: "Server error" });
  }
};

module.exports = {
  createOrder,
};
