import express from 'express'
const app = express()


app.get("/:name", (req, res) => {
    res.send("hello " + req.params.name + req.params.name);
});



app.listen(7000,() => {
    console.log("Your server is runinng at http://localhost:7000");
})