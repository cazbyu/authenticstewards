import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

interface Step4Props {
  onNext: () => void;
  onBack: () => void;
  userData: any;
  updateUserData: (data: any) => void;
}

const Step4Actions = ({ onNext, onBack, userData, updateUserData }: Step4Props) => {
  const [actions, setActions] = useState<Record<string, string[]>>({});
  const [newAction, setNewAction] = useState('');
  const [activeRole, setActiveRole] = useState(userData.weeklyFocusRoles[0]);

  const handleAddAction = () => {
    if (newAction.trim()) {
      setActions(prev => ({
        ...prev,
        [activeRole]: [...(prev[activeRole] || []), newAction.trim()]
      }));
      setNewAction('');
    }
  };

  const handleRemoveAction = (role: string, index: number) => {
    setActions(prev => ({
      ...prev,
      [role]: prev[role].filter((_, i) => i !== index)
    }));
  };

  const handleNext = () => {
    updateUserData({ anchorActions: actions });
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
          Create Anchor Actions
        </h2>
        <p className="text-gray-600">
          Add 1-4 key actions for each focus role. These will be your weekly commitments.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          {userData.weeklyFocusRoles.map((role: string) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-4 py-2 rounded-lg ${
                activeRole === role
                  ? 'bg-primary-100 text-primary-700 font-medium'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {userData.roles.find((r: any) => r.id === role)?.name}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newAction}
              onChange={(e) => setNewAction(e.target.value)}
              placeholder="Add an anchor action..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
              onKeyPress={(e) => e.key === 'Enter' && handleAddAction()}
            />
            <button
              onClick={handleAddAction}
              disabled={!newAction.trim()}
              className="px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>

          {actions[activeRole]?.map((action, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-gray-700">{action}</span>
              <button
                onClick={() => handleRemoveAction(activeRole, index)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={Object.keys(actions).length === 0}
          className="flex-1 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 transition-colors"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
};

export default Step4Actions;