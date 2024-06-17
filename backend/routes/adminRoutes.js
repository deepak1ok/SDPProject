import express from "express";
import {totalInfo,userInfo,removeUser,donationInfo,ngoInfo,removeNgo,removeDonation} from '../controllers/adminControllers.js'

const router = express.Router();

router.get('/totalinfo',totalInfo)

router.get('/allusers',userInfo)

router.post('/removeuser/:id',removeUser)

router.get('/alldonations',donationInfo)

router.get('/allngo',ngoInfo)

router.post('/removengo/:id',removeNgo)

router.post('/removedonation/:id',removeDonation)




export default router;