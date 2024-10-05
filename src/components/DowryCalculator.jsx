import React, { useState } from 'react';

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
    // This is a placeholder calculation. You should implement your own logic here.
    const educationValue = educationOptions.indexOf(formData.educationLevel) * 10000;
    const wealthValue = formData.familyWealth.length * 5000;
    const skillsValue = formData.skillsAndTalents.length * 15000;
    const appearanceValue = formData.physicalAppearance * 10000;
    const ageValue = (30 - formData.age) * 5000;

    const total = educationValue + wealthValue + skillsValue + appearanceValue + ageValue;
    setTotalDowry(total);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">Dowry Calculator</h1>
        
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
          className="mt-6 w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
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
      </div>
    </div>
  );
};

export default DowryCalculator;