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
    <div className="w3-container w3-padding">
      <h1 className="w3-center">Stroke Risk Prediction</h1>
      <form onSubmit={handleSubmit} className="w3-card w3-padding w3-round w3-light-grey">
        <table className="w3-table">
          <tbody>
            <tr>
              <td><label>Gender:</label></td>
              <td>
                <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
              </td>
            </tr>
            <tr>
              <td><label>Age:</label></td>
              <td><input type="number" name="age" min="0" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Hypertension:</label></td>
              <td>
                <input type="radio" name="hypertension" value="Yes" onChange={handleChange} /> Yes
                <input type="radio" name="hypertension" value="No" onChange={handleChange} /> No
              </td>
            </tr>
            <tr>
              <td><label>Heart Disease:</label></td>
              <td>
                <input type="radio" name="heart_disease" value="Yes" onChange={handleChange} /> Yes
                <input type="radio" name="heart_disease" value="No" onChange={handleChange} /> No
              </td>
            </tr>
            <tr>
              <td><label>Ever Married:</label></td>
              <td>
                <input type="radio" name="ever_married" value="Yes" onChange={handleChange} /> Yes
                <input type="radio" name="ever_married" value="No" onChange={handleChange} /> No
              </td>
            </tr>
            <tr>
              <td><label>Work Type:</label></td>
              <td>
                <select name="work_type" onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Private">Private</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="Govt_Job">Govt Job</option>
                  <option value="Children">Children</option>
                  <option value="Never_worked">Never worked</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Residence Type:</label></td>
              <td>
                <select name="residence_type" onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Urban">Urban</option>
                  <option value="Rural">Rural</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Avg Glucose Level:</label></td>
              <td><input type="text" name="avg_glucose_level" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>BMI:</label></td>
              <td><input type="text" name="bmi" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Smoking Status:</label></td>
              <td>
                <select name="smoking_status" onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="formerly smoked">Formerly Smoked</option>
                  <option value="never smoked">Never Smoked</option>
                  <option value="smokes">Smokes</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w3-center">
          <button type="submit" className="w3-button w3-blue w3-round">Check Stroke Prediction</button>
        </div>
      </form>
      {error && <p className="w3-text-red w3-center">{error}</p>} {/* Display error */}
      {result && <p className="w3-text-green w3-center">{result}</p>}
    </div>
  );
}

export default PredictionForm;
