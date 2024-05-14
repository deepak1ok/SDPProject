import express from "express";
import { createNgo,checkEmail } from "../controllers/ngoController.js";


const router = express.Router();

router.post("/create", createNgo);

router.post("/checkEmail", checkEmail);



export default router