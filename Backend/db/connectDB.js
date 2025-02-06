import mongoose from "mongoose";

const connectDB = ()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/abc")
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;