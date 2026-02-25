import mongoose from "mongoose";

const dbConnect = async() => {
    await mongoose.connect("mongodb://localhost")
}

export default dbConnect;