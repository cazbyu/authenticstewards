import { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';

interface Step2Props {
  userData: any;
  updateUserData: (data: any) => void;
}

const Step2Roles = ({ userData, updateUserData }: Step2Props) => {
  const [newRole, setNewRole] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>(userData.roles || []);

  const predefinedRoles = [
    'Parent', 'Partner', 'Friend', 'Professional', 'Creator',
    'Learner', 'Community Member', 'Health Seeker', 'Financial Steward'
  ];

  const handleAddRole = () => {
    if (newRole && !selectedRoles.includes(newRole)) {
      const updatedRoles = [...selectedRoles, newRole];
      setSelectedRoles(updatedRoles);
      updateUserData({ roles: updatedRoles });
      setNewRole('');
    }
  };

  const handleSelectRole = (role: string) => {
    if (!selectedRoles.includes(role) && selectedRoles.length < 7) {
      const updatedRoles = [...selectedRoles, role];
      setSelectedRoles(updatedRoles);
      updateUserData({ roles: updatedRoles });
    }
  };

  const handleRemoveRole = (role: string) => {
    const updatedRoles = selectedRoles.filter(r => r !== role);
    setSelectedRoles(updatedRoles);
    updateUserData({ roles: updatedRoles });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Roles</h2>
      <p className="text-gray-600 mb-6">
        Choose 4-7 roles that are most important to you. These will be the foundation of your planning.
      </p>

      {/* Selected roles */}
      <div className="mb-6">
        <h3 className="text-gray-700 font-medium mb-2">Your Selected Roles</h3>
        {selectedRoles.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedRoles.map(role => (
              <div 
                key={role} 
                className="flex items-center bg-primary-100 text-primary-700 px-3 py-1 rounded-full"
              >
                <span>{role}</span>
                <button 
                  onClick={() => handleRemoveRole(role)}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic mb-2">No roles selected yet</p>
        )}
        <p className="text-sm text-gray-500">
          {7 - selectedRoles.length} more roles can be added
        </p>
      </div>

      {/* Add custom role */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Add Custom Role
        </label>
        <div className="flex">
          <input
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            placeholder="Enter a custom role..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
          />
          <button
            onClick={handleAddRole}
            disabled={!newRole || selectedRoles.length >= 7}
            className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white p-2 rounded-r-lg transition-colors"
          >
            <PlusCircle size={20} />
          </button>
        </div>
      </div>

      {/* Predefined roles */}
      <div>
        <h3 className="text-gray-700 font-medium mb-2">Common Roles</h3>
        <div className="grid grid-cols-2 gap-2">
          {predefinedRoles.map(role => (
            <button
              key={role}
              onClick={() => handleSelectRole(role)}
              disabled={selectedRoles.includes(role) || selectedRoles.length >= 7}
              className={`p-2 text-left rounded-lg transition-colors ${
                selectedRoles.includes(role)
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-50'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step2Roles;