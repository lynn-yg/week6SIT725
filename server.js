// server.js
const express = require("express");
const app = express();

// Define a simple route for addition
app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send("Invalid input");
  }

  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

// Export app for testing
module.exports = app;
app.get("/health", (req, res) => res.json({ ok: true }));
// Only start the server if run directly (not when required in tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));
}
// server.js (add below your /add route)
app.get("/subtract", (req, res) => {
  const a = parseFloat(req.query.a), b = parseFloat(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) return res.status(400).send("Invalid input");
  res.send(`The difference of ${a} and ${b} is ${a - b}`);
});

app.get("/multiply", (req, res) => {
  const a = parseFloat(req.query.a), b = parseFloat(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) return res.status(400).send("Invalid input");
  res.send(`The product of ${a} and ${b} is ${a * b}`);
});

app.get("/divide", (req, res) => {
  const a = parseFloat(req.query.a), b = parseFloat(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) return res.status(400).send("Invalid input");
  if (b === 0) return res.status(400).send("Cannot divide by zero");
  res.send(`The quotient of ${a} and ${b} is ${a / b}`);
});
