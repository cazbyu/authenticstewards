import { useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const GeneralSettings = () => {
  // Sample state for settings
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [startDay, setStartDay] = useState<'Sunday' | 'Monday'>('Monday');
  const [quadrantView, setQuadrantView] = useState<'list' | 'matrix'>('list');
  const [showTutorials, setShowTutorials] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>('English');
  
  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Swahili',
  ];
  
  return (
    <div className="space-y-8">
      {/* Theme selector */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Theme</h3>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setTheme('light')}
            className={`flex flex-col items-center px-4 py-3 rounded-lg border ${
              theme === 'light' 
                ? 'bg-primary-50 border-primary-300' 
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Sun size={24} className="mb-2 text-yellow-500" />
            <span className={theme === 'light' ? 'text-primary-700 font-medium' : 'text-gray-700'}>
              Light
            </span>
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`flex flex-col items-center px-4 py-3 rounded-lg border ${
              theme === 'dark' 
                ? 'bg-primary-50 border-primary-300' 
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Moon size={24} className="mb-2 text-indigo-600" />
            <span className={theme === 'dark' ? 'text-primary-700 font-medium' : 'text-gray-700'}>
              Dark
            </span>
          </button>
          <button
            onClick={() => setTheme('system')}
            className={`flex flex-col items-center px-4 py-3 rounded-lg border ${
              theme === 'system' 
                ? 'bg-primary-50 border-primary-300' 
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Monitor size={24} className="mb-2 text-gray-600" />
            <span className={theme === 'system' ? 'text-primary-700 font-medium' : 'text-gray-700'}>
              System
            </span>
          </button>
        </div>
      </div>
      
      {/* Start of week */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Start of Week</h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setStartDay('Sunday')}
            className={`px-4 py-3 rounded-lg border ${
              startDay === 'Sunday' 
                ? 'bg-primary-50 border-primary-300 text-primary-700 font-medium' 
                : 'border-gray-200 hover:bg-gray-50 text-gray-700'
            }`}
          >
            Sunday
          </button>
          <button
            onClick={() => setStartDay('Monday')}
            className={`px-4 py-3 rounded-lg border ${
              startDay === 'Monday' 
                ? 'bg-primary-50 border-primary-300 text-primary-700 font-medium' 
                : 'border-gray-200 hover:bg-gray-50 text-gray-700'
            }`}
          >
            Monday
          </button>
        </div>
      </div>
      
      {/* Quadrant view */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Default Quadrant View</h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setQuadrantView('list')}
            className={`px-4 py-3 rounded-lg border ${
              quadrantView === 'list' 
                ? 'bg-primary-50 border-primary-300 text-primary-700 font-medium' 
                : 'border-gray-200 hover:bg-gray-50 text-gray-700'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setQuadrantView('matrix')}
            className={`px-4 py-3 rounded-lg border ${
              quadrantView === 'matrix' 
                ? 'bg-primary-50 border-primary-300 text-primary-700 font-medium' 
                : 'border-gray-200 hover:bg-gray-50 text-gray-700'
            }`}
          >
            Matrix View
          </button>
        </div>
      </div>
      
      {/* Tutorial toggle */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Tutorial Prompts</h3>
        <div className="flex items-center">
          <label className="inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={showTutorials}
              onChange={() => setShowTutorials(!showTutorials)}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            <span className="ms-3 text-gray-700">
              Show tutorial prompts for new features
            </span>
          </label>
        </div>
      </div>
      
      {/* Language selector */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Language</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
        >
          {languages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default GeneralSettings;