import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PredictionForm from './pages/PredictionForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<PredictionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
