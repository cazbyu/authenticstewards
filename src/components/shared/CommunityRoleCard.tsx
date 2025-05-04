import { useState } from 'react';
import { ChevronDown, ChevronUp, HandHeart, UsersRound, Edit, X } from 'lucide-react';

interface CommunityRole {
  id: string;
  label: string;
  selected: boolean;
  icon: React.ReactNode;
}

interface CustomRole {
  id: string;
  label: string;
  selected?: boolean;
}

const CommunityRoleCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newCustomRole, setNewCustomRole] = useState('');
  const [customRoles, setCustomRoles] = useState<CustomRole[]>([]);
  const [showCustomInput, setShowCustomInput] = useState(false);

  const [communityRoles, setCommunityRoles] = useState<CommunityRole[]>([
    { id: 'volunteer', label: 'Volunteer', selected: false, icon: <HandHeart size={20} /> },
    { id: 'club-member', label: 'Club Member', selected: false, icon: <UsersRound size={20} /> },
  ]);

  const toggleRole = (id: string) => {
    setCommunityRoles(roles =>
      roles.map(role =>
        role.id === id ? { ...role, selected: !role.selected } : role
      )
    );
  };

  const toggleCustomRole = (id: string) => {
    setCustomRoles(roles =>
      roles.map(role =>
        role.id === id ? { ...role, selected: !role.selected } : role
      )
    );
  };

  const handleAddCustomRole = () => {
    if (newCustomRole.trim()) {
      const newRole = {
        id: `custom-${Date.now()}`,
        label: newCustomRole.trim(),
        selected: true,
      };
      setCustomRoles([...customRoles, newRole]);
      setNewCustomRole('');
      setShowCustomInput(false);
    }
  };

  const handleRemoveCustomRole = (id: string) => {
    setCustomRoles(roles => roles.filter(role => role.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddCustomRole();
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div>
          <h3 className="font-medium text-gray-800">Community</h3>
          <p className="text-sm text-gray-600">Select the community roles you want to invest in.</p>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4">
          <div className="space-y-3">
            {/* Predefined roles */}
            {communityRoles.map(role => (
              <div
                key={role.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <div className={`text-gray-500 ${role.selected ? 'text-primary-600' : ''}`}>
                    {role.icon}
                  </div>
                  <span className={`text-gray-700 ${role.selected ? 'font-semibold' : 'font-normal'}`}>
                    {role.label}
                  </span>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={role.selected}
                    onChange={() => toggleRole(role.id)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            ))}

            {/* Custom roles */}
            {customRoles.map(role => (
              <div
                key={role.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <div className={`text-gray-500 ${role.selected ? 'text-primary-600' : ''}`}>
                    <Edit size={20} />
                  </div>
                  <span className={`text-gray-700 ${role.selected ? 'font-semibold' : 'font-normal'}`}>
                    {role.label}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={role.selected}
                      onChange={() => toggleCustomRole(role.id)}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                  <button
                    onClick={() => handleRemoveCustomRole(role.id)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}

            {/* Custom role input */}
            {showCustomInput ? (
              <div className="flex gap-2 items-center p-2">
                <div className="text-gray-500"><Edit size={20} /></div>
                <input
                  type="text"
                  value={newCustomRole}
                  onChange={(e) => setNewCustomRole(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter a role (e.g., PTA Member, Civic Leader)"
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                  autoFocus
                />
                <button
                  onClick={handleAddCustomRole}
                  disabled={!newCustomRole.trim()}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 transition-colors"
                >
                  Add
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowCustomInput(true)}
                className="flex items-center space-x-2 w-full p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Edit size={20} />
                <span>Add Custom Role</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityRoleCard;