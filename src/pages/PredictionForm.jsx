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
  const [error, setError] = useState('');
  const [predictionData, setPredictionData] = useState(null); // Store detailed response

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult('');
    setPredictionData(null);

    // Age validation
    const ageNum = Number(formData.age);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 110) {
      setError('Age must be a number between 1 and 110.');
      return;
    }

    // Avg Glucose Level validation
    const glucoseNum = Number(formData.avg_glucose_level);
    if (
      isNaN(glucoseNum) ||
      glucoseNum < 10 ||
      glucoseNum > 1100
    ) {
      setError('Average glucose level must be a number between 10 and 1100.');
      return;
    }

    // BMI validation
    const bmiNum = Number(formData.bmi);
    if (
      isNaN(bmiNum) ||
      bmiNum < 10 ||
      bmiNum > 100
    ) {
      setError('BMI must be a number between 10 and 100.');
      return;
    }

    console.log('Prediction payload:', formData);

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

      // If new API response format, display it
      if (
        data &&
        typeof data.prediction !== 'undefined' &&
        typeof data.stroke_chance_percent !== 'undefined'
      ) {
        setPredictionData(data);
        setResult('');
      } else {
        setResult(data.message || 'Prediction complete.');
      }
    } catch (error) {
      setError(error.message || 'Error occurred while predicting stroke risk.');
    }
  };

  return (
    <div className="w3-container w3-card w3-light-grey w3-padding-large w3-margin-top">
      <h3 className="w3-center w3-text-blue">Stroke Risk Prediction</h3>
      <form onSubmit={handleSubmit} className="w3-form">
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
      {error && <p className="w3-text-red w3-center">{error}</p>}
      {result && <p className="w3-text-green w3-center">{result}</p>}
      {predictionData && (
        <div className="w3-panel w3-pale-green w3-border w3-margin-top">
          <h4 className="w3-text-green">Prediction Result</h4>
          <p>
            <strong>Prediction:</strong>{' '}
            {predictionData.prediction === 1 ? 'High Risk' : 'Low Risk'}
          </p>
          <p>
            <strong>Stroke Chance Percent:</strong> {predictionData.stroke_chance_percent}%
          </p>
          <div>
            <strong>Personalized Suggestion:</strong>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {Array.isArray(predictionData.personalized_suggestion)
                ? predictionData.personalized_suggestion.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))
                : <li>{predictionData.personalized_suggestion}</li>}
            </ul>
          </div>
          <div>
            <strong>Feature Importances:</strong>
            <table className="w3-table w3-bordered w3-small w3-margin-top">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Importance (%)</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(predictionData.feature_importances) &&
                  predictionData.feature_importances.map((f, i) => (
                    <tr key={i}>
                      <td>{f.feature}</td>
                      <td>{f.importance}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PredictionForm;
