import { useState } from 'react';

function ConsultForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const response = await fetch('https://api.emailservice.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'molawadekn@gmail.com',
          subject: 'Consultation Request',
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to send email. Please try again.');
      }
      setStatus('Your request has been sent successfully!');
    } catch (error) {
      setStatus('Failed to send your request. Please try again.');
    }
  };

  return (
    <div className="w3-container w3-padding">
      <h1 className="w3-center">Consult a Doctor</h1>
      <form onSubmit={handleSubmit} className="w3-card w3-padding w3-round w3-light-grey" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="w3-margin-bottom">
          <label className="w3-text-black">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w3-input w3-border w3-round"
          />
        </div>
        <div className="w3-margin-bottom">
          <label className="w3-text-black">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w3-input w3-border w3-round"
          />
        </div>
        <div className="w3-margin-bottom">
          <label className="w3-text-black">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w3-input w3-border w3-round"
          />
        </div>
        <div className="w3-center">
          <button type="submit" className="w3-button w3-blue w3-round-large">
            Consult
          </button>
        </div>
      </form>
      {status && <p className={`w3-center ${status.includes('successfully') ? 'w3-text-green' : 'w3-text-red'}`}>{status}</p>}
    </div>
  );
}

export default ConsultForm;
