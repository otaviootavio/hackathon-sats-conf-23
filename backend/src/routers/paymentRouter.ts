import express from "express";
import paymentController from "../controllers/PaymentControllers";

const paymentRouter = express.Router();

paymentRouter.use('/payment', paymentController);

export default paymentRouter;
