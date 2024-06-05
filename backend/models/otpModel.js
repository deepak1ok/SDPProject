import mongoose from 'mongoose';

const otpSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
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