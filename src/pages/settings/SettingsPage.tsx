import { motion } from 'framer-motion';
import { useState } from 'react';
import GeneralSettings from './sections/GeneralSettings';
import IntegrationsSettings from './sections/IntegrationsSettings';
import NotificationsSettings from './sections/NotificationsSettings';
import BackupSettings from './sections/BackupSettings';
import RoleSettings from './sections/RoleSettings';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState<string>('general');
  
  const sections = [
    { id: 'general', label: 'General' },
    { id: 'roles', label: 'Roles' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'backup', label: 'Backup & Export' },
  ];
  
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Customize your Authentic Planner experience</p>
        </header>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Settings navigation */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 text-gray-700 whitespace-nowrap ${
                  activeSection === section.id 
                    ? 'border-b-2 border-primary-600 text-primary-700 font-medium' 
                    : 'hover:bg-gray-50'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          
          {/* Settings content */}
          <div className="p-6">
            {activeSection === 'general' && <GeneralSettings />}
            {activeSection === 'roles' && <RoleSettings />}
            {activeSection === 'integrations' && <IntegrationsSettings />}
            {activeSection === 'notifications' && <NotificationsSettings />}
            {activeSection === 'backup' && <BackupSettings />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;