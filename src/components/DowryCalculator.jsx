import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DowryCalculator = () => {
  const [formData, setFormData] = useState({
    educationLevel: '',
    familyWealth: '',
    skillsAndTalents: [],
    physicalAppearance: 5,
    age: 25,
  });
  const [totalDowry, setTotalDowry] = useState(0);

  const educationOptions = ['10th Pass', '12th Pass', 'Graduate', 'Post Graduate', 'PhD', 'Other'];
  const skillOptions = ['Cooking', 'Cleaning', 'Taking Care', 'Having Job', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillsChange = (skill) => {
    setFormData(prevData => ({
      ...prevData,
      skillsAndTalents: prevData.skillsAndTalents.includes(skill)
        ? prevData.skillsAndTalents.filter(s => s !== skill)
        : [...prevData.skillsAndTalents, skill]
    }));
  };

 

const calculateDowry = () => {
  const baseAmount = 500; // Minimum dowry amount
  let total = baseAmount;

  // Age calculation (older = higher dowry)
  const ageValue = Math.max(0, (formData.age - 18) * 5000);
  total += ageValue;

  // Appearance calculation
  const appearanceValue = formData.physicalAppearance * 10000;
  total += appearanceValue;

  // Education calculation
  const educationIndex = educationOptions.indexOf(formData.educationLevel);
  const educationValue = educationIndex * 20000;
  total += educationValue;

  // Skills calculation
  const skillsValue = formData.skillsAndTalents.length * 15000;
  total += skillsValue;

  // Family wealth (assuming it's a string description, we'll use its length as a simple metric)
  const wealthValue = formData.familyWealth.length * 1000;
  total += wealthValue;

  // Ensure the total is within the specified range
  total = Math.min(1000000, Math.max(500, total));

  setTotalDowry(total);
};

  return (
    <div className="bg-women-pattern bg-cover min-h-screen flex items-center justify-center p-4">
    <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 max-w-md w-full">
      <h1 className="text-3xl font-extrabold text-center text-pink-700 mb-6">Women's Dowry Calculator</h1>
    
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Education Level:</label>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Education Level</option>
              {educationOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Family Wealth:</label>
            <input
              type="text"
              name="familyWealth"
              value={formData.familyWealth}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Describe family wealth"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Skills and Talents:</label>
            <div className="flex flex-wrap gap-2">
              {skillOptions.map(skill => (
                <button
                  key={skill}
                  onClick={() => handleSkillsChange(skill)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    formData.skillsAndTalents.includes(skill)
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Physical Appearance (1-10):</label>
            <input
              type="number"
              name="physicalAppearance"
              value={formData.physicalAppearance}
              onChange={handleInputChange}
              min="1"
              max="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button 
          onClick={calculateDowry}
          className="mt-6 w-full bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Calculate Dowry
        </button>

       
        {totalDowry > 0 && (
          <div className="mt-6 text-center">
             <p className="text-2xl font-bold text-pink-600">
              Total Dowry: ${totalDowry.toLocaleString()}
            </p>
          </div>
        )}

        
<Link to="/men-dowry" className="mt-4 block text-center text-pink-600 hover:underline">
          Switch to Men's Dowry Calculator
        </Link>
      </div>
    </div>
  );
};

export default DowryCalculator;