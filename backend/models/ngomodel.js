import mongoose from "mongoose";

const ngoSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    ngoName: {
      type: String,
      required: true,
    },

    volunteers: {
      type: Number,
      required: true,
    },
    totalCampaigns: {
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
    
    phoneNumber: {
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
    pinCode: {
      type: Number,
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
    totalFeeds: {
      type: Number,
      required: true,
    },
  },
  { timeStamps: true }
);

const Ngo = mongoose.model("Ngo", ngoSchema);

export default Ngo;
