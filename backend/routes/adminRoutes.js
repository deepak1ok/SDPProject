import express from "express";
import {totalInfo,userInfo,removeUser,donationInfo,ngoInfo,removeNgo} from '../controllers/adminControllers.js'

const router = express.Router();

router.get('/totalinfo',totalInfo)

router.get('/allusers',userInfo)

router.post('/removeuser',removeUser)

router.get('/alldonations',donationInfo)

router.get('/allngo',ngoInfo)

router.post('/removengo',removeNgo)




export default router;