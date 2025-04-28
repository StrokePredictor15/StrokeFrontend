import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Stroke Prediction App</h1>
      <img
        src="https://via.placeholder.com/300"
        alt="Stroke Awareness"
        style={{ width: '100%', maxWidth: '300px', margin: '20px 0' }}
      />
      <p>
        Stroke is a medical emergency. Early action can save lives. Use this app to predict your risk of stroke.
      </p>
      <button
        onClick={() => navigate('/predict')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Predict Stroke Risk
      </button>
    </div>
  );
}

export default HomePage;
