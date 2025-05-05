import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface Step5Props {
  onNext: () => void;
  onBack: () => void;
  userData: any;
  updateUserData: (data: any) => void;
}

const Step5Schedule = ({ onNext, onBack, userData, updateUserData }: Step5Props) => {
  const [selectedDays, setSelectedDays] = useState<Record<string, string[]>>({});
  
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleDaySelect = (action: string, day: string) => {
    setSelectedDays(prev => {
      const newDays = { ...prev };
      if (!newDays[action]) {
        newDays[action] = [day];
      } else if (newDays[action].includes(day)) {
        newDays[action] = newDays[action].filter(d => d !== day);
      } else {
        newDays[action] = [...newDays[action], day];
      }
      return newDays;
    });
  };

  const handleComplete = () => {
    updateUserData({ actionSchedule: selectedDays });
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <Link 
        to="/weekly" 
        className="block text-center text-sm text-gray-400 hover:text-gray-600 mb-6"
      >
        Return to Planner
      </Link>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Schedule Your Actions
        </h2>
        <p className="text-gray-600">
          Choose which days you'll perform each anchor action.
        </p>
      </div>

      <div className="mb-8">
        {Object.entries(userData.anchorActions).map(([role, actions]: [string, any]) => (
          <div key={role} className="mb-6">
            <h3 className="font-medium text-gray-800 mb-3">
              {userData.roles.find((r: any) => r.id === role)?.name}
            </h3>
            <div className="space-y-4">
              {actions.map((action: string, index: number) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-3">{action}</p>
                  <div className="flex gap-2 flex-wrap">
                    {weekdays.map(day => (
                      <button
                        key={day}
                        onClick={() => handleDaySelect(action, day)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedDays[action]?.includes(day)
                            ? 'bg-primary-100 text-primary-700'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        {day.slice(0, 3)}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleComplete}
          className="flex-1 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Complete Setup
        </button>
      </div>
    </motion.div>
  );
};

export default Step5Schedule;