import express from "express";
import { createNgo,checkEmail,aboutNgo,acceptDonation,ngoRequests } from "../controllers/ngoController.js";


const router = express.Router();

router.post("/create", createNgo);

router.post("/checkEmail", checkEmail);

router.get("/aboutngo/:id", aboutNgo);

router.post("/acceptdonation", acceptDonation);

router.get("/ngorequests/:id", ngoRequests);



export default router   