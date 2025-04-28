import { useNavigate } from 'react-router-dom';
import './FirstPage.css'; // Import the CSS file

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container first-page-container updated-background">
      <h1 className="title">Stroke Predictor</h1>
      <ul className="tips-list">
        <li>Maintain a healthy diet and exercise regularly.</li>
        <li>Monitor and control your blood pressure.</li>
        <li>Avoid smoking and excessive alcohol consumption.</li>
      </ul>
      <h2 className="section-title">Contact a Doctor</h2>
      <p className="description">
        If you experience any symptoms of a stroke, contact your doctor immediately.
      </p>
      <button className="primary-button" onClick={() => navigate('/contact-form')}>
        Contact Doctor
      </button>
      <h2 className="section-title">Stroke Prediction Assessment</h2>
      <p className="description">
        Take a quick assessment to understand your risk of stroke.
      </p>
      <button className="secondary-button" onClick={() => navigate('/prediction-form')}>
        Start Assessment
      </button>
    </div>
  );
};

export default FirstPage;
