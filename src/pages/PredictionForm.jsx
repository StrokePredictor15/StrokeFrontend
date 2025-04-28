import { useState } from 'react';

function PredictionForm() {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    hypertension: '',
    heart_disease: '',
    ever_married: '',
    work_type: '',
    residence_type: '',
    avg_glucose_level: '',
    bmi: '',
    smoking_status: '',
  });
  const [result, setResult] = useState('');
  const [error, setError] = useState(''); // Add error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state
    setResult(''); // Reset result state
    try {
      const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch prediction. Please try again.');
      }
      const data = await response.json();
      setResult(data.message);
    } catch (error) {
      setError(error.message || 'Error occurred while predicting stroke risk.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Stroke Risk Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
          <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" min="0" onChange={handleChange} required />
        </div>
        <div>
          <label>Hypertension:</label>
          <input type="radio" name="hypertension" value="Yes" onChange={handleChange} /> Yes
          <input type="radio" name="hypertension" value="No" onChange={handleChange} /> No
        </div>
        <div>
          <label>Heart Disease:</label>
          <input type="radio" name="heart_disease" value="Yes" onChange={handleChange} /> Yes
          <input type="radio" name="heart_disease" value="No" onChange={handleChange} /> No
        </div>
        <div>
          <label>Ever Married:</label>
          <input type="radio" name="ever_married" value="Yes" onChange={handleChange} /> Yes
          <input type="radio" name="ever_married" value="No" onChange={handleChange} /> No
        </div>
        <div>
          <label>Work Type:</label>
          <select name="work_type" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Private">Private</option>
            <option value="Self-employed">Self-employed</option>
            <option value="Govt_Job">Govt Job</option>
            <option value="Children">Children</option>
            <option value="Never_worked">Never worked</option>
          </select>
        </div>
        <div>
          <label>Residence Type:</label>
          <select name="residence_type" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
          </select>
        </div>
        <div>
          <label>Avg Glucose Level:</label>
          <input type="text" name="avg_glucose_level" onChange={handleChange} required />
        </div>
        <div>
          <label>BMI:</label>
          <input type="text" name="bmi" onChange={handleChange} required />
        </div>
        <div>
          <label>Smoking Status:</label>
          <select name="smoking_status" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="formerly smoked">Formerly Smoked</option>
            <option value="never smoked">Never Smoked</option>
            <option value="smokes">Smokes</option>
          </select>
        </div>
        <button type="submit">Check Stroke Prediction</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error */}
      {result && <p>{result}</p>}
    </div>
  );
}

export default PredictionForm;
