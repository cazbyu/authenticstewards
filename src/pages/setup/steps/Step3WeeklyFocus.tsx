import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, StarOff } from 'lucide-react';

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
  userData: any;
  updateUserData: (data: any) => void;
}

const Step3WeeklyFocus = ({ onNext, onBack, userData, updateUserData }: Step3Props) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  // Group roles by category
  const rolesByCategory = userData.roles?.reduce((acc: any, role: any) => {
    const category = role.category.charAt(0).toUpperCase() + role.category.slice(1);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({
      ...role,
      displayName: role.name
        .split('-')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    });
    return acc;
  }, {}) || {};

  const toggleRole = (roleId: string) => {
    setSelectedRoles(prev => {
      if (prev.includes(roleId)) {
        return prev.filter(id => id !== roleId);
      } else if (prev.length < 7) {
        return [...prev, roleId];
      }
      setError('Maximum 7 roles can be selected');
      return prev;
    });
  };

  const handleNext = () => {
    if (selectedRoles.length === 0) {
      setError('Please select at least one role');
      return;
    }
    console.log('Selected roles for weekly focus:', selectedRoles);
    updateUserData({ weeklyFocusRoles: selectedRoles });
    onNext();
  };

  // Clear error when selection changes
  useEffect(() => {
    setError('');
  }, [selectedRoles]);

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
          Select Your Priority Roles
        </h2>
        <p className="text-gray-600">
          Choose 1-7 roles you would like to prioritize this week.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {Object.entries(rolesByCategory).map(([category, roles]: [string, any]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {category} Roles
            </h3>
            {roles.map((role: any) => (
              <button
                key={role.id}
                onClick={() => toggleRole(role.id)}
                className={`
                  w-full p-4 rounded-lg border transition-all duration-200
                  ${selectedRoles.includes(role.id)
                    ? 'bg-primary-50 border-primary-200 shadow-sm'
                    : 'border-gray-200 hover:bg-gray-50'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span className={`
                    font-medium
                    ${selectedRoles.includes(role.id) ? 'text-primary-700' : 'text-gray-700'}
                  `}>
                    {role.displayName}
                  </span>
                  {selectedRoles.includes(role.id) ? (
                    <Star className="text-primary-600" size={20} />
                  ) : (
                    <StarOff className="text-gray-400" size={20} />
                  )}
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className={`
            flex-1 py-3 rounded-lg transition-colors
            ${selectedRoles.length > 0
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }
          `}
          disabled={selectedRoles.length === 0}
        >
          Continue
        </button>
      </div>

      <p className="text-sm text-gray-500 text-center mt-4">
        {selectedRoles.length === 0
          ? 'Select at least one role to continue'
          : `${selectedRoles.length} role${selectedRoles.length === 1 ? '' : 's'} selected`
        }
      </p>
    </motion.div>
  );
};

export default Step3WeeklyFocus;