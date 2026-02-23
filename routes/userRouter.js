import express from "express"

const userRouter = express.Router()

userRouter.post("/", (req, res) => {
    res.send("User route working")
})

export default userRouter