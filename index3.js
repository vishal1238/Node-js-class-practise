import express from 'express'
const app = express()

app.get("/",(req, res) => {
    console.log(req.url);
    res.send("Hello World")
})
app.get("/home",(req, res) => {
    res.send("This is my home page")
})
app.get("/page",(req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    console.log(req.headers.authorization);

    
    res.send("This is my page1")
})




app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000/');
})

