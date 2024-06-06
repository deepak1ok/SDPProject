import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createTokens.js";
import Ngo from "../models/ngomodel.js";
import {sendMail} from '../config/helper.js'
import Otp from '../models/otpModel.js'

const generateRandom4Digits=()=>
  {
    return Math.floor(1000+Math.random()*9000);
  }

export const createUser = asyncHandler(async (req, res, next) => {
  const { role, fname, lname, email, password } = req.body;

  console.log(process.env.SMTP_MAIL)

  console.log(process.env.SMTP_PASSWORD)

  if (!fname || !lname || !email || !password) 
  {
     throw new Error("Please fill all the inputs");
  }

  const userExists = await User.findOne({ email });

  if (userExists) return res.status(400).send("User already exists!");

  
  const hashedPassword = await bcrypt.hash(password,10);
  
  const newUser = await User.create({ fname, lname, email, password: hashedPassword });

  try {
    createToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      fname: newUser.fname,
      lname: newUser.lname,
      email: newUser.email,
      role,
    });
  } catch (error) {
    res.status(400);
    throw new Error("invalid user data");
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      createToken(res, existingUser._id);
      res.status(201).json({
        _id: existingUser._id,
        fname: existingUser.fname,
        lname: existingUser.lname,
        email: existingUser.email,
        role: "donor",
      });
    }
    return;
  }
});

export const logoutCurrentUser = asyncHandler(async (req, res, next) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: "Logged out successfully",
  });
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export const getCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found.");
  }
});

export const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const deleteUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Cannot delete admin user");
    }

    await User.deleteOne({ _id: user._id });
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found.");
  }
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const updateUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const loginNgo = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await Ngo.findOne({ email });

  console.log(existingUser)

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      createToken(res, existingUser._id);
      res.status(201).json({
        _id: existingUser._id,
        fname: existingUser.fname,
        lname: existingUser.lname,
        email: existingUser.email,
        role: "ngo",
      });
    }
    return;
  }
});


export const otpMailValidator = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Cannot delete admin user");
    }

    await User.deleteOne({ _id: user._id });
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found.");
  }
});



export const sendOtp = asyncHandler(async (req, res) => {
 
  const {email,fname,lname}=req.body;

  if(!email || !fname || !lname)
    {
      throw new Error("Please fill all the inputs")
    }

  const userData=await User.findOne({email:email});

  if(userData)
    {
      return res.status(400).
      json({
        success:false,
        message:"Email already exist"
      });
    }

    //const newUser = await User.create({ fname, lname, email, password: hashedPassword });
  
    const g_otp=generateRandom4Digits();
  
    const cDate=new Date();

    const otpResult=await Otp.findOneAndUpdate(
      {email:email},{otp:g_otp,fName:fname,lName:lname,timestamp:new Date(cDate.getTime())},{upsert:true,new:true,setDefaultsOnInsert:true}
    );

    const msg='<p> Hi <b>'+fname+lname+'<b>, </br> <h4>Your OTP for registering to Food Share is</h4>'+g_otp+'</br></br><h4>Happy Contributions!!</h4></p>';

    sendMail(email,'OTP Verfication--Food Share',msg)

    return res.status(200).json(
      {
        data:otpResult,
        status:true
      }
    )

});


export const verifyOtp = asyncHandler(async (req, res) => {

  const {email,otp,password}=req.body;

  console.log(otp,password);

  if(!email || !otp)
    {
      throw new Error("Please fill all the inputs");
    }

  const data=await Otp.findOne({email:email});

  console.log(data.otp)

  if(parseInt(data.otp)===parseInt(otp))
    {
      const hashedPassword = await bcrypt.hash(password,10);

      const newUser = await User.create({ fname:data.fName, lname:data.lName, email, password: hashedPassword });

      try {
        createToken(res, newUser._id);
        res.status(201).json({
          _id: newUser._id,
          fname: newUser.fname,
          lname: newUser.lname,
          email: newUser.email,
        });
      } catch (error) {
        res.status(400);
        throw new Error("invalid user data");
      }
    }
    else
    {
      return res.status(400).json(
        {
          message:"OTP is invalid"
        }
      )
    }




  // const newUser = await User.create({ fname, lname, email, password: hashedPassword });
  
  //   const g_otp=generateRandom4Digits();
  
  //   const cDate=new Date();

  //   const otpResult=await Otp.findOneAndUpdate(
  //     {email:email},{otp:g_otp,fName:fname,lName:lname,timestamp:new Date(cDate.getTime())},{upsert:true,new:true,setDefaultsOnInsert:true}
  //   );

  //   const msg='<p> Hii <b>'+fname+'<b>, </br> <h4></h4></p>'+g_otp;

  //   //sendMail(email,'OTP Verfication',msg)

  //   return res.status(200).json(
  //     {
  //       data:otpResult,
  //       status:true
  //     }
  //   )

});
