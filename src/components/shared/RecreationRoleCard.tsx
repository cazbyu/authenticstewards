import { useState } from 'react';
import { ChevronDown, ChevronUp, Activity, Flag, Users, Mountain, Music, Palette, Edit } from 'lucide-react';

interface RecreationRoleCardProps {
  onRoleToggle: (roleId: string, selected: boolean, label: string, category: string) => void;
  selectedRoles: {[key: string]: boolean};
}

const RecreationRoleCard = ({ onRoleToggle, selectedRoles }: RecreationRoleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [otherRole, setOtherRole] = useState('');

  const [recreationRoles] = useState([
    { id: 'athlete', label: 'Athlete', icon: <Activity size={20} /> },
    { id: 'team-captain', label: 'Team Captain', icon: <Flag size={20} /> },
    { id: 'club-member', label: 'Club Member', icon: <Users size={20} /> },
    { id: 'adventurer', label: 'Adventurer', icon: <Mountain size={20} /> },
    { id: 'performer', label: 'Performer', icon: <Music size={20} /> },
    { id: 'hobbyist', label: 'Hobbyist', icon: <Palette size={20} /> },
  ]);

  const handleRoleToggle = (roleId: string, label: string) => {
    onRoleToggle(roleId, !selectedRoles[roleId], label, 'recreation');
  };

  const handleAddCustomRole = () => {
    if (otherRole.trim()) {
      const roleId = `recreation-${otherRole.toLowerCase().replace(/\s+/g, '-')}`;
      onRoleToggle(roleId, true, otherRole, 'recreation');
      setOtherRole('');
    }
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
          <h3 className="font-medium text-gray-800">Recreation</h3>
          <p className="text-sm text-gray-600">Select the recreational roles you want to invest in.</p>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4">
          <div className="space-y-3">
            {recreationRoles.map(role => (
              <div
                key={role.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <div className={`text-gray-500 ${selectedRoles[role.id] ? 'text-primary-600' : ''}`}>
                    {role.icon}
                  </div>
                  <span className={`text-gray-700 ${selectedRoles[role.id] ? 'font-semibold' : 'font-normal'}`}>
                    {role.label}
                  </span>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedRoles[role.id] || false}
                    onChange={() => handleRoleToggle(role.id, role.label)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            ))}

            {/* Custom role input */}
            <div className="flex items-center space-x-3 p-2">
              <div className="text-gray-500">
                <Edit size={20} />
              </div>
              <input
                type="text"
                value={otherRole}
                onChange={(e) => setOtherRole(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Write in a recreational role..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
              />
              {otherRole.trim() && (
                <button
                  onClick={handleAddCustomRole}
                  className="px-3 py-1 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecreationRoleCard;