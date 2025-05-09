import { Link } from 'react-router-dom';
import { useState } from 'react';
import PredictionForm from './PredictionForm'; // Import the PredictionForm component
import ConsultForm from './ConsultForm'; // Import the ConsultForm component

function HomePage() {
  const [showPredictionForm, setShowPredictionForm] = useState(false);
  const [showConsultForm, setShowConsultForm] = useState(false); // State for ConsultForm

  const togglePredictionForm = () => {
    setShowPredictionForm(!showPredictionForm);
    if (showConsultForm) setShowConsultForm(false); // Hide ConsultForm if visible
  };

  const toggleConsultForm = () => {
    setShowConsultForm(!showConsultForm);
    if (showPredictionForm) setShowPredictionForm(false); // Hide PredictionForm if visible
  };

  return (
    <div className="w3-container w3-padding-16 w3-serif w3-theme-light w3-text-dark-gray" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1 className="w3-center w3-text-blue" style={{ fontSize: '2.5em' }}>Stroke Predictor</h1>

      <div
        className="w3-row w3-center"
        style={{
          display: 'flex',
          flexWrap: 'wrap', // Allow wrapping for smaller screens
          justifyContent: 'space-around',
          alignItems: 'center',
          animation: 'fadeIn 1.5s', // Add fade-in animation
        }}
      >
        {/* Section 1: Stroke Prediction */}
        <section className="w3-margin" style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.5em' }}>Check Stroke Prediction</h2>
          <button
            className="w3-button w3-blue w3-round-large w3-margin-top"
            onClick={togglePredictionForm} // Toggle PredictionForm on click
          >
            Predict Stroke
          </button>
        </section>

        {/* Section 3: Tips to Avoid Stroke */}
        <section className="w3-margin" style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.5em' }}>Tips to Avoid Stroke</h2>
          <img
            src="/images/stroke.jpg"
            alt="Tips to avoid stroke"
            className="w3-image w3-margin-top"
            style={{ maxWidth: '300px' }}
          />
        </section>

        {/* Section 2: Consult Doctor */}
        <section className="w3-margin" style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.5em' }}>Consult a Doctor</h2>
          <button
            className="w3-button w3-blue w3-round-large w3-margin-top"
            onClick={toggleConsultForm} // Toggle ConsultForm on click
          >
            Consult Now
          </button>
        </section>
      </div>

      {/* Render PredictionForm if showPredictionForm is true */}
      {showPredictionForm && <PredictionForm />}

      {/* Render ConsultForm if showConsultForm is true */}
      {showConsultForm && <ConsultForm />}
    </div>
  );
}

export default HomePage;
