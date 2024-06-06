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
    lat: {
        type: mongoose.Decimal128 ,
        required: true,
      },
    lng: {
        type: mongoose.Decimal128 ,
        required: true,
      },
    postalCode: {
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
      ngoID:
      {
        type:String,
      },
      pickuptime:
      {
        type:String,
      }

  },
  { timeStamps: true }
);

const Donate = mongoose.model("Donate", donateSchema);

export default Donate;
