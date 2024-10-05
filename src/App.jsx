
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DowryCalculator from './components/DowryCalculator';
import MensDowryCalculator from './components/MensDowryCalculator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DowryCalculator />} />
        <Route path="/women-dowry" element={<DowryCalculator />} />
        <Route path="/men-dowry" element={<MensDowryCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
