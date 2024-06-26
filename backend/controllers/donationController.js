import Donate from "../models/donationModel.js";
import Request from "../models/requestModel.js";
import {sendMail} from '../config/helper.js';
import Ngo from "../models/ngomodel.js";

export const createDonations = async (req, res) => {
  
  const {
    address,
    city,
    email,
    firstName,
    items,
    lastName,
    lat,
    lng,
    phonenumber,
    pincode,
    state,
    date,
    donationStatus,
    donorId
  } = req.body;

  // if (!address || !city || !email || !firstName || !items || !lastName || !lat || !lng || !phoneNumber || !postalCode || !state)
  //   {
  //     throw new Error("Please fill all the inputs");
  //   }

  const newDonate = await Donate.create({
    address,
    city,
    email,
    firstName,
    items,
    lastName,
    lat,
    lng,
    phonenumber,
    pincode,
    state,
    date,
    donationStatus,
    donorId
  });

  console.log(newDonate);
  try {
    res.status(201).json({
      meesage: "Sucessfull",
    });
  } catch (error) {
    res.status(400);
    throw new Error("invalid user data");
  }
};

export const donationList = async (req, res) => {
  const donationLists = await Donate.find({donationStatus:"false"}).populate("donorId");
  try {
    res.status(201).json({
      donationLists,
    });
  } catch (error) {
    res.status(400);
    throw new Error("invalid user data");
  }
};

export const searchDonation = async (req, res) => {
 
  console.log("state"+req.params.state);
  console.log(req.params.city);

  const donationLists = await Donate.find({state:req.params.state,city:req.params.city,donationStatus:"false"}).populate("donorId");

  console.log(donationLists)


  if (donationLists) {
    return res.status(201).json({
      data: donationLists,
    });
  } else {
    return res.status(400).json({
      message: "Data not found",
    });
  }


};


export const aboutDonation = async (req, res) => {

  const data = await Donate.findById(req.params.id).populate("donorId");

  if (data) {
    return res.status(201).json({
      data: data,
    });
  } else {
    return res.status(400).json({
      message: "Data not found",
    });
  }
}

export const mydonation = async (req, res) => {

  const data = await Donate.find({donorId:req.params.id});
  if (data) {
    return res.status(201).json({
      data: data,
    });
  } else {
    return res.status(400).json({
      message: "Data not found",
    });
  }
}

export const requestToDonate = async (req, res) => {

  console.log(req.body.data);

   const data=await Request.create(req.body.data);

   const ngoData=await Ngo.findOne({_id:data.ngoId});

   console.log(ngoData);

   const msg=`Hi ${req.body.data.donorId.fname} ${req.body.data.donorId.lname},<br></br>Congragulations! ${ngoData.ngoname} NGO has requested some food items based on your donation done in our website.<br></br><br></br>Go to FoodShare Website to see the request.<br></br><br></br><br></br><br></br> <b>Thanks,Team FoodShare</b>`

   const ngoMsg='Hi '+ngoData.ngoname+',<br></br> Your request for food items has been successfully sent to '+req.body.data.donorId.fname+' '+req.body.data.donorId.lname+'.<br></br>You can see your request in FoodShare Website<br></br><br></br><br></br><br></br> <b>Thanks,Team FoodShare</b>';
   
   sendMail(req.body.data.donorId.email,'Request to Donate Food-FoodShare',msg);
   
   sendMail(ngoData.email,'Request Successfull',ngoMsg);

   if (data) {
    return res.status(201).json({
      data: data,
    });
  } else {
    return res.status(400).json({
      message: "Data not found",
    });
  }
}

export const donationRequests = async (req, res) => {

   const data=await Request.find({donationId:req.params.id}).populate("ngoId").populate("donorId")

   if (data) {
    return res.status(201).json({
      data: data,
    });
  } else {
    return res.status(400).json({
      message: "Data not found",
    });
  }
}

export const aboutRequest = async (req, res) => {


  const data=await Request.findOne({_id:req.params.id}).populate("ngoId").populate("donationId");

  let checkValid=true;
 
        for(let i=0;i<data.itemsRequested.length;i++)
        {
            if(parseInt(data.itemsRequested[i].quantity)>parseInt(data.donationId.items[i].quantity))
            {
                checkValid=false;
            }
        }
    
  
  if (data) {
   return res.status(201).json({
     data: data,
     checkValid:checkValid
   });
 } else {
   return res.status(400).json({
     message: "Data not found",
   });
 }

  
}


export const acceptRequest = async (req, res) => {


  const data=await Request.findOne({_id:req.params.id});

  const donationData=await Donate.findOne({_id:data.donationId});

  let items=donationData.items;

  let status=true;

  const ngoMsg='Hi '+ngoData.ngoname+',<br></br> Your request for food items has been successfully sent to '+req.body.data.donorId.fname+' '+req.body.data.donorId.lname+'.<br></br>You can see your request in FoodShare Website<br></br><br></br><br></br><br></br> <b>Thanks,Team FoodShare</b>';
   
  sendMail(req.body.data.donorId.email,'Request to Donate Food-FoodShare',msg);
  

  for(let i=0;i<data.itemsRequested.length;i++)
  {
    items[i].quantity=parseInt(items[i].quantity)-parseInt(data.itemsRequested[i].quantity);

    if(items[i].quantity!==0)
      {
        status=false;
      }
  }

  let statusString=status?"true":"false";

  const result1=await Donate.updateOne({_id:data.donationId},{$set:{items:items,donationStatus:statusString}});

  const result2=await Request.updateOne({_id:req.params.id},{$set:{status:"Accepted"}});


  if (result1) {
    return res.status(201).json({
      data: result1,
    });
  } else {
    return res.status(400).json({
      message: "Data not found",
    });
  }

 

  
}


export const rejectRequest = async (req, res) => {


  const data=await Request.updateOne({_id:req.params.id},{$set:{status:"Rejected"}});

  if (data) {
    return res.status(201).json({
      data: data,
    });
  } else {
    return res.status(400).json({
      message: "Data not found",
    });
  }

}


export const deleteRequest = async (req, res) => {

  console.log(req.params.id)

  const data=await Request.deleteOne({_id:req.params.id});

  if (data) {
    return res.status(201).json({
      data: data,
    });
  } else {
    return res.status(400).json({
      message: "Data not found",
    });
  }

}

export const deleteDonation = async (req, res) => {

  console.log(req.params.id)

  const data=await Donate.deleteOne({_id:req.params.id});

  if (data) {
    return res.status(201).json({
      data: data,
    });
  } else {
    return res.status(400).json({
      message: "Data not found",
    });
  }

}








