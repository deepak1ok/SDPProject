import express from "express";
import { requestDonation,donationList } from "../controllers/donationController.js";

const router = express.Router();

router.post("/request", requestDonation);

router.get("/donationlist",donationList);

export default router