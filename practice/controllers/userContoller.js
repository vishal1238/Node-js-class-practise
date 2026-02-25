import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const SECRET ="1234"
const signup = async (req, res) => {
  try {
    const body = req.body;

    const hashPassword = await bcrypt.hash(body.password, 10);
    body.password = hashPassword;
    const result = await userModel.create(body);

    res.status(201).json({ message: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to Create User" });
  }
};


const login = async(req, res) => {
    const {email, password} = req.body;
    const found = userModel.findOne({email});

    if(found){
        const checkPassword = await bcrypt.compare(password,found.password)
            if(checkPassword){
                const user = {
                    name,
                    email,
                    role
                }
                const token = jwt.sign(user, SECRET, {expiresIn: "1h"})
                res.status(200).json({message: "login sucessful", token})
            }
    }else{
        res.status(400).json({message: "User not found"})
    }
};

const result = await userModel.find();
res.status(200).json(result)


const deleteUser (req, res) => {
    
    try {
        const id = req.params.id;
        const result = await userModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "user not deleted" });
    }

}