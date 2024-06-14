import express from "express";
import { createDonations,donationList,aboutDonation,mydonation,requestToDonate,donationRequests,aboutRequest,acceptRequest, rejectRequest,deleteRequest,deleteDonation,searchDonation } from "../controllers/donationController.js";

const router = express.Router();

router.post("/request", createDonations);

router.get("/donationlist", donationList);

router.get("/donationlist/:state/:city", searchDonation);

router.post("/requestdonation", requestToDonate);

router.get("/aboutdonation/:id", aboutDonation);

router.get("/donationrequests/:id", donationRequests);

router.get("/aboutrequest/:id", aboutRequest);

router.post("/acceptdonation/:id", acceptRequest);

router.post("/rejectrequest/:id", rejectRequest);

router.post("/deleterequest/:id", deleteRequest);

router.post("/deletedonation/:id", deleteDonation);

router.get("/:id", mydonation);





export default router;