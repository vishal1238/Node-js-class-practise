import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {tyoe: String, required: true, unique: true},
    password: {type:}
})