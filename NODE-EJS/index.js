import express from 'express'

const app = express()
app.set("view engine", "ejs")

const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 43 },
    { id: 3, name: "Product 3", price: 34 }
];

app.get("/", (req, res) => {
    res.render("index", { name: "john" })
});

app.get("/products", (req, res) => {
    res.render("products", { products }) 
});

app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});