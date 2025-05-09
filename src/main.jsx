import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // New import
import PredictionForm from './pages/PredictionForm'; // Correct import path
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer /> {/* Added Footer component */}
    </Router>
  </StrictMode>
);
