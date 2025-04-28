import './styles/global.css'; // Import global styles
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import FirstPage from './pages/FirstPage'; // New import
import PredictionForm from './pages/PredictionForm'; // Correct import path

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/app" element={<App />} />
        <Route path="/prediction-form" element={<PredictionForm />} />
      </Routes>
    </Router>
  </StrictMode>
);
