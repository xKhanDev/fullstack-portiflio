import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async()=>{
  try {
      await mongoose.connect(`${process.env.MONGO_DB_URL}`);
      console.log("DB connected");
      return true
  } catch (error) {
    console.log("ERROR IN DB CONNECTION",error.message);
    process.exit(1);
  }
}

export default connectDB;
