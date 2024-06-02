import ngo from '../models/ngomodel.js'
import bcrypt from 'bcryptjs'
import Donate from "../models/donationModel.js";

export const createNgo = async (req, res) => {

    
    console.log(req.body);

    const {firstName,lastName,ngoName,state,city,pinCode,phoneNumber,email,password,address,volunteers,totalFeeds,totalCampaigns, 
    adults,childrens,description,lat,lng} = req.body;

    if(!firstName || !lastName || !ngoName || !state || !city || !pinCode || !phoneNumber || !email || !password || !address || !volunteers || !totalFeeds || !totalCampaigns ||
    !adults || !childrens || !description || !lat || !lng)
    {
        throw new Error("Please fill all the inputs");
    
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   const newNgo = await ngo.create({firstName,lastName,ngoName,state,city,pinCode,phoneNumber,email,password:hashedPassword,address,volunteers,totalFeeds,totalCampaigns, 
    adults,childrens,description,lat,lng});

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

    const ngoData = await ngo.findOne({email:req.params.id},{password:0,lat:0,lng:0,totalCampaigns:0,totalFeeds:0,volunteers:0,adults:0,childrens:0});

    
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

