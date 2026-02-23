import express from 'express'
import jwt from 'jsonwebtoken'
const SECRET = 'lpu'
const app = express()

const user = {
    name: "john",
    email: "john@gmail.com",
    role: "student"
}

const token = jwt.sign(user, SECRET,{expiresIn: "1h"})
console.log(token);




app.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
  