const express = require('express');
const cors = require('cors');
const request = require('request');
const fs = require('fs');
const path = require('path');
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
  let formData = req.body;

  // Convert Yes/No to 1/0 for specific fields in request body
  const convertYN = (val) => val === 'Yes' ? 1 : 0;
  formData.hypertension = convertYN(formData.hypertension);
  formData.heart_disease = convertYN(formData.heart_disease);
  // formData.ever_married = convertYN(formData.ever_married);

  // Rename residence_type to Residence_type in request body
  if ('residence_type' in formData) {
    formData.Residence_type = formData.residence_type;
    delete formData.residence_type;
  }
  console.log('Prediction payload:', JSON.stringify(formData));

  // Call backend API and return its response
  request.post(
    {
      url: 'http://127.0.0.1:8000/model/predict',
      json: formData,
      timeout: 10000
    },
    (error, response, body) => {
      if (error) {
        console.error('Error calling backend:', error);
        return res.status(500).json({ message: 'Error calling prediction backend.' });
      }
      if (response && response.statusCode >= 400) {
        return res.status(response.statusCode).json(body);
      }
      res.json(body);
    }
  );
});

app.post('/api/consultForm', (req, res) => {
  const { name, age, symptoms, contact } = req.body;

  if (!name || !age || !symptoms || !contact) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const entry = `Name: ${name}, Age: ${age}, Symptoms: ${symptoms}, Contact: ${contact}\n`;
  const filePath = path.join(__dirname, 'consultationRequests.txt');

  fs.appendFile(filePath, entry, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ message: 'Failed to save consultation request.' });
    }
    res.json({ message: 'Consultation request submitted successfully.' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
