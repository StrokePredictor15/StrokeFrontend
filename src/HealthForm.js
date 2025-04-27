// src/HealthForm.js
import React, { useState } from 'react';
import './HealthForm.css';

function HealthForm() {
    const [formData, setFormData] = useState({
        name: '',
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
        covid_vaccination: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        alert("Form submitted Successfully!");
    };

    return (
        <div className="form-container">
            <h2>Health Survey Form</h2>
            <form className="styled-form"  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Gender:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
                        <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
                        <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required min="0" max="120" />
                </div>

                <div className="form-group">
                    <label>Hypertension:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="hypertension" value="Yes" onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="hypertension" value="No" onChange={handleChange} /> No</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Heart Disease:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="heart_disease" value="Yes" onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="heart_disease" value="No" onChange={handleChange} /> No</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Ever Married:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="ever_married" value="Yes" onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="ever_married" value="No" onChange={handleChange} /> No</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Work Type:</label>
                    <select name="work_type" value={formData.work_type} onChange={handleChange}>
                        <option value="">-- Select --</option>
                        <option value="Private">Private</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Govt_job">Govt Job</option>
                        <option value="Children">Children</option>
                        <option value="Never_worked">Never worked</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Residence Type:</label>
                    <select name="residence_type" value={formData.residence_type} onChange={handleChange}>
                        <option value="">-- Select --</option>
                        <option value="Urban">Urban</option>
                        <option value="Rural">Rural</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Avg Glucose Level:</label>
                    <input type="number" step="0.1" name="avg_glucose_level" value={formData.avg_glucose_level} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>BMI:</label>
                    <input type="number" step="0.1" name="bmi" value={formData.bmi} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Smoking Status:</label>
                    <select name="smoking_status" value={formData.smoking_status} onChange={handleChange}>
                        <option value="">-- Select --</option>
                        <option value="formerly smoked">Formerly smoked</option>
                        <option value="never smoked">Never smoked</option>
                        <option value="smokes">Smokes</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Covid Vaccination:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="covid_vaccination" value="Yes" onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="covid_vaccination" value="No" onChange={handleChange} /> No</label>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default HealthForm;
