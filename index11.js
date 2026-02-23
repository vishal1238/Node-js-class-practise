import express from 'express'
const app = express()
app.use("/image", express.static("images"))







app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});