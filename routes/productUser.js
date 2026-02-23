import express from "express"

const productUser = express.Router()

productUser.post("/", (req, res) => {
    res.send("Product route working")
})

export default productUser