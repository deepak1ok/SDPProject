import mongoose from "mongoose";

const requestSchema = mongoose.Schema(
  {
    donationId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Donate',
          required:true,
      },
    ngoId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Ngo',
      required: true,
    },
    donorId: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required: true,
    },
    
    itemsRequested: {
      type: Array,
      required: true,
    },
    status: {
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
      pickupTime: {
        type: String ,
        required: true,
      },
  },
  { timeStamps: true }
);

const Request = mongoose.model("Request", requestSchema);

export default Request;
