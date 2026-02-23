import express from 'express'
import userRouter from "./routes/userRouter.js"
import productUser from "./routes/productUser.js"

const app = express()

app.use("/api/users", userRouter)
app.use("/api/products", productUser)

app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});