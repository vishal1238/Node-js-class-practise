import express from 'express'
const app = express()

// Route: /num1/num2
app.get("/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  const sum = a + b;

  res.send(sum.toString());
});

// Start server
app.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
