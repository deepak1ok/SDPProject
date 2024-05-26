import Donate from "../models/donationModel.js";

export const requestDonation = async (req, res) => {

    console.log(req.body);
 const {address,city,email,firstName,items,lastName,lat,lng,phoneNumber,postalCode,state,date } = req.body;

// if (!address || !city || !email || !firstName || !items || !lastName || !lat || !lng || !phoneNumber || !postalCode || !state)
//   {
//     throw new Error("Please fill all the inputs");
//   }

  const newDonate = await Donate.create({address,city,email,firstName,items,lastName,lat,lng,phoneNumber,postalCode,state,date});

  console.log(newDonate);
  try {
    res.status(201).json({
     meesage:"Sucessfull"
    });
  } catch (error) {
    res.status(400);
    throw new Error("invalid user data");
  }

}


export const donationList = async (req, res) => {

 const donationLists=await Donate.find({})
  try {
    res.status(201).json({
        donationLists
    });
  } catch (error) {
    res.status(400);
    throw new Error("invalid user data");
  }

}

export const aboutDonation = async (req, res) => {

  console.log(req.params.id);
 
  const data=await Donate.findById(req.params.id)

   if(data)
   {
    return res.status(201).json({
      data:data
    })
   }
   else
   {
    return res.status(400).json({
      message:"Data not found"  
   })
   }
  }


  export const myDonation = async (req, res) => {

    console.log(req.params.id);

    const data=await Donate.find({email:req.params.id});

    console.log(data)

    try
    {
      return res.status(201).json({
        data:data
      })
    }
    catch(error)
    {
      return res.status(400).json({
        message:"Data not found"  
     })
    }

  }
