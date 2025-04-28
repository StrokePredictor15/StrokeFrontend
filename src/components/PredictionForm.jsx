import React from "react";
import "./PredictionForm.css"; // Import CSS for styling

const PredictionForm = () => {
  return (
    <div className="container prediction-form">
      <h1>Stroke Prediction Assessment</h1>
      <p>Fill out the form below to assess your risk of stroke.</p>
      <form className="form">
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" placeholder="Enter your age" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="smoking">Smoking Status</label>
          <select id="smoking" name="smoking">
            <option value="">Select smoking status</option>
            <option value="never">Never Smoked</option>
            <option value="former">Former Smoker</option>
            <option value="current">Current Smoker</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default PredictionForm;
