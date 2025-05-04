import { useState } from 'react';
import { Plus, CheckCircle, Circle, ArrowUpDown } from 'lucide-react';

const AnchorActionsList = () => {
  // Sample anchor actions
  const [actions, setActions] = useState([
    { id: 1, title: 'Weekly family dinner', role: 'Parent', completed: false },
    { id: 2, title: 'Team retrospective', role: 'Professional', completed: false },
    { id: 3, title: '30-minute meditation', role: 'Self', completed: true },
    { id: 4, title: 'Weekly budget review', role: 'Financial Steward', completed: false },
  ]);

  const toggleComplete = (id: number) => {
    setActions(
      actions.map(action => 
        action.id === id 
          ? { ...action, completed: !action.completed } 
          : action
      )
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Anchor Actions</h2>
        <div className="flex items-center">
          <button className="p-1 rounded hover:bg-gray-100 mr-2 text-gray-500">
            <ArrowUpDown size={16} />
          </button>
          <button className="bg-primary-600 text-white p-1 rounded">
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {actions.map(action => (
          <div 
            key={action.id}
            className="p-3 border border-gray-100 rounded-lg flex items-center hover:bg-gray-50 transition-colors"
          >
            <button 
              onClick={() => toggleComplete(action.id)}
              className="mr-3 text-gray-600 hover:text-primary-600"
            >
              {action.completed ? (
                <CheckCircle className="text-primary-600" size={20} />
              ) : (
                <Circle size={20} />
              )}
            </button>
            <div className="flex-1">
              <h3 className={`font-medium ${action.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                {action.title}
              </h3>
              <p className="text-sm text-gray-500">Role: {action.role}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center">
        <Plus size={16} className="mr-1" />
        Add Anchor Action
      </button>
    </div>
  );
};

export default AnchorActionsList;