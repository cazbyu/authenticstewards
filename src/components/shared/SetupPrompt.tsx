import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetupPrompt = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  if (!isVisible) return null;

  return (
    <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-gray-800 mb-1">Welcome to Authentic Planner</h3>
          <p className="text-gray-600 text-sm mb-3">
            Let's set up your personalized planning experience to help you live with intention.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button 
              onClick={() => navigate('/setup')}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
            >
              Complete My Setup
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              Remind Me Later
            </button>
          </div>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 p-1"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default SetupPrompt;