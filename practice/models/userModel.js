import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = mongoose.Schema({
    name: {type:String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
})

const userModel = mongoose.model("user")