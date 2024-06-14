import ngo from '../models/ngomodel.js'
import bcrypt from 'bcryptjs'
import Donate from "../models/donationModel.js";
import Request from '../models/requestModel.js';
import createToken from "../utils/createTokens.js";

export const createNgo = async (req, res) => {

    console.log(req.body);

    const {ngoname,state,city,phonenumber,email,password,address,numberofvolunteers,totalfeeds,totalcampaigns, 
    adults,childrens,description,lat,lng,nameofvolunteer} = req.body;

    if(!ngoname || !state || !city ||  !phonenumber || !email || !password || !address || !numberofvolunteers || !totalfeeds || !totalcampaigns ||
    !adults || !childrens || !description || !lat || !lng)
    {
        throw new Error("Please fill all the inputs");
    
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   const newNgo = await ngo.create({ngoname,state,city,phonenumber,email,password:hashedPassword,address,numberofvolunteers,totalfeeds,totalcampaigns, 
    adults,childrens,description,lat,lng,nameofvolunteer});

  try {
    return res.status(201).json({
     meesage:"Sucessfull",
     data:newNgo
    });
  } catch (error) {
    res.status(400);
    throw new Error("invalid user data");
  }
   
   }


   export const checkEmail = async (req, res) => {

    const {email} = req.body;

    if(!email)
    {
        throw new Error("Please fill all the inputs");
    
    }

    const emailExist = await ngo.findOne({email:email});

    if(emailExist)
    {
        return res.status(200).json({
            emailExist,
            status:false
        });
    }
    else{
        return res.status(200).json({
            status:true
        });
    }   


   }

   export const aboutNgo = async (req, res) => {

    console.log(req.params.id);

    const ngoData = await ngo.findOne({_id:req.params.id},{password:0});

    
    if(ngoData)
        {
            return res.status(200).json({
                ngoData,
                status:false
            });
        }
        else{
            return res.status(200).json({
                status:true
            });
        }   


   }

   export const acceptDonation = async (req, res) => {

    console.log(req.body);

        let result;

        if(req.body.removeDonation)
        {
             result=await Donate.updateOne({_id:req.body.data._id},{$set:{donationStatus:"true"}});
        }
        else
        {
             result=await Donate.updateOne({_id:req.body.data._id},{$set:{items:req.body.data.items}});
        }
   
        if(result)
        {
            return res.status(200).json({
                result,
                
            });
        }
        else{
            return res.status(200).json({
            });
        }

   }

   export const ngoRequests = async (req, res) => {

    console.log(req.params.id)

    const ngoRequest = await Request.find({ngoId:req.params.id}).populate("donationId").populate("ngoId").populate("donorId");

    console.log(ngoRequest)

    if(ngoRequest)
        {
            return res.status(200).json({
                data:ngoRequest,
                
            });
        }
        else{
            return res.status(400).json({
                message: "Data not found",
              });
        }   
  
  }

