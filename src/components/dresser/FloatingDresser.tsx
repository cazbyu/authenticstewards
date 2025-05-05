import { useState } from 'react';
import { Archive, X, ChevronRight } from 'lucide-react';
import RolesPanel from './panels/RolesPanel';
import DepositsPanel from './panels/DepositsPanel';
import PromptsPanel from './panels/PromptsPanel';
import ReflectionsPanel from './panels/ReflectionsPanel';
import VisionPanel from './panels/VisionPanel';

interface FloatingDresserProps {
  isOpen: boolean;
  onClose: () => void;
}

const FloatingDresser = ({ isOpen, onClose }: FloatingDresserProps) => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const panels = [
    { id: 'roles', label: 'Roles', icon: '👤', component: RolesPanel },
    { id: 'deposits', label: 'Saved Deposits', icon: '💡', component: DepositsPanel },
    { id: 'prompts', label: 'Prompt Bank', icon: '✍️', component: PromptsPanel },
    { id: 'reflections', label: 'Reflections', icon: '🪞', component: ReflectionsPanel },
    { id: 'vision', label: 'Vision & Values', icon: '🌱', component: VisionPanel },
  ];

  if (!isOpen) return null;

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
            <div className="flex items-center gap-2">
              <Archive className="text-primary-600" size={24} />
              <h2 className="text-lg font-semibold text-gray-800">
                Your Authentic Dresser
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Organize your identity, actions, and inspiration
          </p>
        </div>

        {/* Panel navigation */}
        <div className="p-4">
          <div className="space-y-2">
            {panels.map(panel => (
              <button
                key={panel.id}
                onClick={() => setActivePanel(activePanel === panel.id ? null : panel.id)}
                className={`
                  w-full px-4 py-3 rounded-lg flex items-center justify-between
                  transition-colors
                  ${activePanel === panel.id 
                    ? 'bg-primary-50 text-primary-700' 
                    : 'hover:bg-gray-50 text-gray-700'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{panel.icon}</span>
                  <span className="font-medium">{panel.label}</span>
                </div>
                <ChevronRight 
                  size={20} 
                  className={`transition-transform ${
                    activePanel === panel.id ? 'rotate-90' : ''
                  }`} 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Active panel content */}
        {activePanel && (
          <div className="border-t border-gray-200">
            <div className="p-4">
              {panels.find(p => p.id === activePanel)?.component({})}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingDresser;