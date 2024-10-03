import React from 'react';
import DowryCalculator from './components/DowryCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-hero-pattern bg-cover flex justify-center items-center">
        <DowryCalculator />
      </div>
    </div>
  );
}

export default App;
