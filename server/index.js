const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());






app.get('/proxy-css', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); // Explicitly set MIME type
  request('https://www.w3schools.com/lib/w3-theme-deep-orange.css').pipe(res);
});
app.get('/proxy-css-1', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); // Explicitly set MIME type
  request('https://www.w3schools.com/w3css/4/w3pro.css').pipe(res);
});
app.get('/proxy-css-2', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); // Explicitly set MIME type
  request('https://www.w3schools.com/w3css/4/w3.css').pipe(res);
});


// Routes
app.post('/api/predict', (req, res) => {
  const formData = req.body;

  // Mock prediction logic
  const { age, hypertension, heart_disease, avg_glucose_level, bmi } = formData;

  if (!age || !avg_glucose_level || !bmi) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const riskScore =
    (parseInt(age) > 50 ? 1 : 0) +
    (hypertension === 'Yes' ? 1 : 0) +
    (heart_disease === 'Yes' ? 1 : 0) +
    (parseFloat(avg_glucose_level) > 140 ? 1 : 0) +
    (parseFloat(bmi) > 25 ? 1 : 0);

  const prediction = riskScore >= 3 ? 'High Risk' : 'Low Risk';

  res.json({ message: `Stroke Risk: ${prediction}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
