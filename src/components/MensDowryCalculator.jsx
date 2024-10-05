import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MensDowryCalculator = () => {
  const [formData, setFormData] = useState({
    educationLevel: '',
    incomePerYear: 50000,
    familyWealth: [],
    personalityAndLooks: 5,
    age: 25,
  });
  const [totalDowry, setTotalDowry] = useState(0);

  const educationOptions = ['10th Pass', '12th Pass', 'Graduate', 'Post Graduate', 'PhD', 'Other'];
  const wealthOptions = ['House', 'Car', 'Assets', 'Land'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWealthChange = (item) => {
    setFormData(prevData => ({
      ...prevData,
      familyWealth: prevData.familyWealth.includes(item)
        ? prevData.familyWealth.filter(w => w !== item)
        : [...prevData.familyWealth, item]
    }));
  };

  const calculateDowry = () => {
    const baseAmount = 500;
    let total = baseAmount;

    // Education calculation
    const educationIndex = educationOptions.indexOf(formData.educationLevel);
    const educationValue = educationIndex * 20000;
    total += educationValue;

    // Income calculation
    const incomeValue = formData.incomePerYear * 0.5;
    total += incomeValue;

    // Family wealth calculation
    const wealthValue = formData.familyWealth.length * 50000;
    total += wealthValue;

    // Personality and looks calculation
    const looksValue = formData.personalityAndLooks * 10000;
    total += looksValue;

    // Age calculation (younger = higher dowry)
    const ageValue = Math.max(0, (35 - formData.age) * 5000);
    total += ageValue;

    // Ensure the total is within the specified range
    total = Math.min(1000000, Math.max(500, total));

    setTotalDowry(total);
  };

  return (
    <div className="bg-men-pattern bg-cover min-h-screen flex items-center justify-center p-4">
    <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 max-w-md w-full">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">Men's Dowry Calculator</h1>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Education Level:</label>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Education Level</option>
              {educationOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Income per Year:</label>
            <input
              type="number"
              name="incomePerYear"
              value={formData.incomePerYear}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              min="0"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Family Wealth:</label>
            <div className="flex flex-wrap gap-2">
              {wealthOptions.map(item => (
                <button
                  key={item}
                  onClick={() => handleWealthChange(item)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    formData.familyWealth.includes(item)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Personality and Looks (1-10):</label>
            <input
              type="number"
              name="personalityAndLooks"
              value={formData.personalityAndLooks}
              onChange={handleInputChange}
              min="1"
              max="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              min="18"
              max="100"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <button 
          onClick={calculateDowry}
          className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Calculate Dowry
        </button>

        {totalDowry > 0 && (
          <div className="mt-6 text-center">
            <p className="text-2xl font-bold text-green-600">
              Total Dowry: ${totalDowry.toLocaleString()}
            </p>
          </div>
        )}

        <Link to="/women-dowry" className="mt-4 block text-center text-blue-600 hover:underline">
          Switch to Women's Dowry Calculator
        </Link>
      </div>
    </div>
  );
};

export default MensDowryCalculator;