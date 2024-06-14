import mongoose from "mongoose";

const ngoSchema = mongoose.Schema(
  {
    ngoname: {
      type: String,
      required: true,
    },
    numberofvolunteers: {
      type: Number,
      required: true,
    },
    totalcampaigns: {
      type: Number,
      required: true,
    },
    adults: {
      type: Number,
      required: true,
    },
    childrens: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },

    phonenumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    lat: {
      type: mongoose.Decimal128,
      required: true,
    },
    lng: {
      type: mongoose.Decimal128,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    totalfeeds: {
      type: Number,
      required: true,
    },
    nameofvolunteer: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

const Ngo = mongoose.model("Ngo", ngoSchema);

export default Ngo;
