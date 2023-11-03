import express from "express";
import PaymentRepository from "../repositories/PaymentRepository";
const paymentController = express.Router();

paymentController.post("/request", async (req, res) => {
  try {
    const data = await PaymentRepository.createCharge(req.body.amount);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
});

paymentController.get("/send", async (req, res) => {
  const data = await PaymentRepository.sendLightningAddressPayment(req.body);

  try {
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default paymentController;
