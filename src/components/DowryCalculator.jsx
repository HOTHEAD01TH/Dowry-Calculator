import React, { useState } from 'react';

const DowryCalculator = () => {
  const [income, setIncome] = useState(50000);
  const [education, setEducation] = useState(10000);
  const [familyBackground, setFamilyBackground] = useState(20000);
  const [jewelry, setJewelry] = useState(15000);

  // Calculating the total dowry
  const totalDowry = income + education + familyBackground + jewelry;

  return (
    <div className="bg-white bg-opacity-80 p-10 rounded-xl shadow-lg max-w-lg w-full text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Dowry Calculator</h1>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="font-medium text-lg">Income Factor:</label>
          <input
            type="range"
            min="10000"
            max="100000"
            value={income}
            onChange={(e) => setIncome(parseInt(e.target.value))}
            className="w-2/3"
          />
          <span className="text-indigo-600 font-semibold">${income}</span>
        </div>

        <div className="flex justify-between items-center">
          <label className="font-medium text-lg">Education Factor:</label>
          <input
            type="range"
            min="5000"
            max="50000"
            value={education}
            onChange={(e) => setEducation(parseInt(e.target.value))}
            className="w-2/3"
          />
          <span className="text-indigo-600 font-semibold">${education}</span>
        </div>

        <div className="flex justify-between items-center">
          <label className="font-medium text-lg">Family Background:</label>
          <input
            type="range"
            min="5000"
            max="50000"
            value={familyBackground}
            onChange={(e) => setFamilyBackground(parseInt(e.target.value))}
            className="w-2/3"
          />
          <span className="text-indigo-600 font-semibold">${familyBackground}</span>
        </div>

        <div className="flex justify-between items-center">
          <label className="font-medium text-lg">Jewelry Factor:</label>
          <input
            type="range"
            min="1000"
            max="30000"
            value={jewelry}
            onChange={(e) => setJewelry(parseInt(e.target.value))}
            className="w-2/3"
          />
          <span className="text-indigo-600 font-semibold">${jewelry}</span>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-3xl font-bold text-green-500">Total Dowry: ${totalDowry}</p>
      </div>

      <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 hover:animate-pulseSlow transition duration-300">
        Calculate
      </button>
    </div>
  );
};

export default DowryCalculator;
