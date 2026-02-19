import express from 'express'
const app = express()

app.get("/home",(req, res) => {
    console.log(req.url);
    res.send("Hello World")
})





app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000/');
})

