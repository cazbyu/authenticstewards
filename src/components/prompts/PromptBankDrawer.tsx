import { X, Lightbulb, Plus } from 'lucide-react';
import { promptBank } from '../../data/promptBank';

interface PromptBankDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRole?: string;
  onSelectPrompt: (prompt: string) => void;
}

const PromptBankDrawer = ({ isOpen, onClose, selectedRole = 'Self', onSelectPrompt }: PromptBankDrawerProps) => {
  if (!isOpen) return null;

  const prompts = promptBank[selectedRole as keyof typeof promptBank] || promptBank.Self;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
      <div 
        className={`
          fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Deposit Ideas for {selectedRole}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Find inspiration for meaningful deposits in this role
          </p>
        </div>

        {/* Prompts list */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)]">
          {prompts.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="text-primary-600 mt-1">
                  <Lightbulb size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 mb-2">{item.prompt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 italic">
                      Example: {item.suggestion}
                    </p>
                    <button
                      onClick={() => onSelectPrompt(item.suggestion)}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-primary-600 hover:bg-primary-100 rounded-full"
                    >
                      <Plus size={16} />
                      <span>Use</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptBankDrawer;