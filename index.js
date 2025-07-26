const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// ✅ Addition
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  res.json({ result: num1 + num2 });
});

// ✅ Subtraction
app.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  res.json({ result: num1 - num2 });
});

// ✅ Multiplication
app.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  res.json({ result: num1 * num2 });
});

// ✅ Division
app.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    return res.status(400).json({ error: 'Invalid input or division by zero' });
  }
  res.json({ result: num1 / num2 });
});

// ✅ Start server
app.listen(port, () => {
  console.log(`✅ Calculator API running at http://localhost:${port}`);
});


