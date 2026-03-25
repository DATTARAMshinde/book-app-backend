// const express = require("express");
// const router = express.Router();
// const Stripe = require("stripe");

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// router.post("/create-payment-intent", async (req, res) => {
//   try {
//     const { amount } = req.body;

//   const paymentIntent = await stripe.paymentIntents.create({
//   amount: Math.round(Number(amount) * 100),
//   currency: "inr",
// });
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//     console.log("✅ PAYMENT ROUTE LOADED");
//   }
// });

// module.exports = router;