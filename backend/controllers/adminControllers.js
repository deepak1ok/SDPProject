import Donate from '../models/donationModel.js';
import Ngo from '../models/ngomodel.js'
import User from '../models/userModel.js'

export const totalInfo = async (req, res) => {
    const countNgo=await Ngo.find({}).count();
    const countDonations=await Donate.find({}).count();
    const countUsers=await User.find({}).count();
    const pendingDonations=await Donate.find({donationStatus:"false"}).count();
    const successfullDonation=await Donate.find({donationStatus:"true"}).count();

    try {
        res.status(201).json({
          countNgo,
          countDonations,
          countUsers,
          pendingDonations,
          successfullDonation
        });
      } catch (error) {
        res.status(400);
        throw new Error("invalid user data");
      }
}

export const userInfo=async(req,res)=>
  {
    const allUsers=await User.find({});
    try {
        res.status(201).json({
          data:allUsers
        });
      } catch (error) {
        res.status(400);
        throw new Error("invalid user data");
      }
  }

  export const removeUser=async(req,res)=>
    {
      const id=req.body.id;

      const result=await User.findByIdAndDelete(id);

      try {
        res.status(201).json({
          result
        });
      } catch (error) {
        res.status(400);
        throw new Error("invalid user data");
      }
    }

    
  export const donationInfo=async(req,res)=>
    {
      const id=req.body.id;

      const result=await Donate.find({}).populate("donorId")
      try {
        res.status(201).json({
          result
        });
      } catch (error) {
        res.status(400);
        throw new Error("invalid user data");
      }
    }

    export const ngoInfo=async(req,res)=>
      {
       
        const result=await Ngo.find({});
        try {
          res.status(201).json({
            result
          });
        } catch (error) {
          res.status(400);
          throw new Error("invalid user data");
        }
      }

      
    export const removeNgo=async(req,res)=>
      {
        console.log(req.body.id);
        const result=await Ngo.findByIdAndDelete(req.body.id);
        try {
          res.status(201).json({
            result
          });
        } catch (error) {
          res.status(400);
          throw new Error("invalid user data");
        }
      }