const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

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
