import ngo from '../models/ngomodel.js'
import bcrypt from 'bcryptjs'

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