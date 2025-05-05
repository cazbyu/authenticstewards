import { useState } from 'react';
import { Plus, CheckCircle, Circle, ArrowUpDown, Lightbulb } from 'lucide-react';
import PromptBankDrawer from '../../../components/prompts/PromptBankDrawer';

const AnchorActionsList = () => {
  const [isPromptBankOpen, setIsPromptBankOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Self');
  const [newDeposit, setNewDeposit] = useState('');
  
  // Sample actions
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

  const handlePromptSelect = (suggestion: string) => {
    setNewDeposit(suggestion);
    setIsPromptBankOpen(false);
  };

  const openPromptBank = (role: string) => {
    setSelectedRole(role);
    setIsPromptBankOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Authentic Deposits</h2>
          <div className="flex items-center">
            <button 
              onClick={() => openPromptBank('Self')}
              className="p-1 rounded hover:bg-gray-100 mr-2 text-gray-500 group relative"
              title="Need ideas? View prompts to inspire your deposits."
            >
              <Lightbulb size={16} />
            </button>
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
              <button
                onClick={() => openPromptBank(action.role)}
                className="ml-2 p-1 text-gray-400 hover:text-primary-600 rounded hover:bg-gray-100"
                title="Get ideas for this role"
              >
                <Lightbulb size={16} />
              </button>
            </div>
          ))}
        </div>

        <button className="mt-4 w-full py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center">
          <Plus size={16} className="mr-1" />
          Add Authentic Deposit
        </button>
      </div>

      <PromptBankDrawer
        isOpen={isPromptBankOpen}
        onClose={() => setIsPromptBankOpen(false)}
        selectedRole={selectedRole}
        onSelectPrompt={handlePromptSelect}
      />
    </>
  );
};

export default AnchorActionsList;