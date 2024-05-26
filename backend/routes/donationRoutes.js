import express from "express";
import { requestDonation,donationList,aboutDonation,myDonation } from "../controllers/donationController.js";

const router = express.Router();

router.post("/request", requestDonation);

router.get("/donationlist",donationList);

router.get("/aboutdonation/:id",aboutDonation);


router.get("/:id",myDonation);

export default router