import {showUsers, login, signup, deleteUser} from '../controllers/userContoller.js'

import  express from 'express'


const userRouter = express.Router()


userRouter.post("/sigup", signup )
userRouter.post("/login", login )
userRouter.get("/", showUsers )
userRouter.delete("/delete", deleteUser )

export default userRouter