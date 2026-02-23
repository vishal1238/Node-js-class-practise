import express from 'express'
import userRouter from "./routes/userRouter.js"
import productUser from "./routes/productUser.js"

const app = express()


// const userRouter = express.userRouter()
// const productUser = express.productUser()
const Router = express.Router()
Router.get("/",(req,res) => {
    res.send("hello World")
})

Router.post("/",(req, res) => {
    res.send("This is post request")
})


app.use("/api/users", userRouter)
app.use("/api/products", productUser)


app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});

