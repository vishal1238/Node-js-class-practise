import express from 'express'
const app = express()

app.get("/:id",(req, res) => {
    console.log(req.url);
    console.log(req.params);
    res.send(req.params.id)
})

app.get("/:id/:email",(req, res) => {
    console.log(req.params);
    console.log(req.url);
    res.send(req.params.id + req.params.email)
})


app.get("/id/:id/email/:email",(req, res) => {
    console.log(req.params);
    console.log(req.url);
    res.send(req.params.id + req.params.email)
})

app.get("/home",(req, res) => {
    res.send("Hello World");
})

app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000/');
})

