import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
    },
    email:{
        type: String,
        unique: true,
    },
    walletAddress:{
        type: String,
        unique: true
    },
    password:{
        type: String,
    },
    refreshToken:{
        type: String
    }
},{timestamps: true});

const User = mongoose.model("user",userSchema);
export default User;