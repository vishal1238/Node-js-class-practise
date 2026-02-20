import express from "express";
const app = express();


const auth = (req, res, next) => {
  const { code } = req.params;

  if (code === "1234") {
    next();
  } else {
    res.send("Access Denied");
  }
};


app.get("/:code", auth, (req, res) => {
  res.send("Welcome");
});


app.listen(7000, () => {
  console.log("Your server is running at http://localhost:7000");
});

