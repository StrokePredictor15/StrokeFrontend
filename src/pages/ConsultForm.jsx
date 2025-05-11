import { useState } from 'react';
import axios from 'axios';

const ConsultForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    symptoms: '',
    contact: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/consultForm', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to submit consultation request.');
      console.error(error);
    }
  };

  return (
    <div className="w3-container w3-card w3-light-grey w3-padding-large w3-margin-top">
      <h3 className="w3-center w3-text-blue">Consultation Request Form</h3>
      <form onSubmit={handleSubmit} className="w3-form">
        <table className="w3-table w3-bordered">
          <tbody>
            <tr>
              <td><label htmlFor="name" className="w3-text-black">Name:</label></td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w3-input w3-border"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="age" className="w3-text-black">Age:</label></td>
              <td>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="w3-input w3-border"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="symptoms" className="w3-text-black">Symptoms:</label></td>
              <td>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  className="w3-input w3-border"
                  placeholder="Describe your symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="contact" className="w3-text-black">Contact:</label></td>
              <td>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="w3-input w3-border"
                  placeholder="Enter your contact details"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="w3-button w3-blue w3-margin-top">Submit</button>
        {message && <p className="w3-text-green w3-margin-top">{message}</p>}
      </form>
    </div>
  );
};

export default ConsultForm;
