import express from "express";
import { createNgo } from "../controllers/ngoController.js";


const router = express.Router();

router.post("/create", createNgo);



export default router