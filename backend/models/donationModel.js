import mongoose from "mongoose";

const donateSchema = mongoose.Schema(
  {
    donorId:
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:'User',
          required:true,
      },
    email: {
      type: String,
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
    lat: {
        type: mongoose.Decimal128 ,
        required: true,
      },
    lng: {
        type: mongoose.Decimal128 ,
        required: true,
      },
    pincode: {
        type: Number,
        required: true,
      },
      phonenumber: {
        type: Number,
        required: true,
      },
    address: {
        type: String,
        required: true,
      },
    items: {
        type: Array,
        required: true,
      },
    date: {
        type: Date,
        required: true,
      },
      donationStatus:
      {
        type:String,
        required:true
      },

  },
  { timeStamps: true }
);

const Donate = mongoose.model("Donate", donateSchema);

export default Donate;
