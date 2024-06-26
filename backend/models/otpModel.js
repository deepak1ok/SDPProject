import mongoose from 'mongoose';

const otpSchema = mongoose.Schema(
    {
        fName: {
            type: String,  
        },
        lName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        otp:{
            type:Number,
            required:true
        },
        timestamp:{
            type:Date,
            default:Date.now(),
            required:true,
            get:(timestamp)=>timestamp.getTime(),
            set:(timestamp)=>new Date(timestamp)
        }

    }
)

const Otp = mongoose.model("Otp", otpSchema);

export default Otp;