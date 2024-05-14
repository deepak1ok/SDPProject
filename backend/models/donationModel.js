import mongoose from "mongoose";

const donateSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
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
    phoneNumber: {
        type: Number,
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
      }

  },
  { timeStamps: true }
);

const Donate = mongoose.model("Donate", donateSchema);

export default Donate;
