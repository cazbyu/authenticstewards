import { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Users, Baby, Shield as Child, Flower, Umbrella, UserRound, HeartHandshake, Edit, X } from 'lucide-react';

interface FamilyRoleCardProps {
  onRoleToggle: (roleId: string, selected: boolean, label: string, category: string) => void;
  selectedRoles: {[key: string]: boolean};
}

const FamilyRoleCard = ({ onRoleToggle, selectedRoles }: FamilyRoleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newCustomRole, setNewCustomRole] = useState('');
  const [customRoles, setCustomRoles] = useState<{id: string; label: string}[]>([]);
  
  const [familyRoles] = useState([
    { id: 'mother', label: 'Mother', icon: <Heart size={20} /> },
    { id: 'father', label: 'Father', icon: <UserRound size={20} /> },
    { id: 'daughter', label: 'Daughter', icon: <Baby size={20} /> },
    { id: 'son', label: 'Son', icon: <Child size={20} /> },
    { id: 'sister', label: 'Sister', icon: <Users size={20} /> },
    { id: 'brother', label: 'Brother', icon: <Users size={20} /> },
    { id: 'partner', label: 'Partner', icon: <HeartHandshake size={20} /> },
    { id: 'spouse', label: 'Spouse', icon: <HeartHandshake size={20} /> },
    { id: 'grandmother', label: 'Grandmother', icon: <Flower size={20} /> },
    { id: 'grandfather', label: 'Grandfather', icon: <Umbrella size={20} /> },
    { id: 'aunt', label: 'Aunt', icon: <Users size={20} /> },
    { id: 'uncle', label: 'Uncle', icon: <UserRound size={20} /> },
  ]);

  const handleRoleToggle = (roleId: string, label: string) => {
    const isSelected = !!selectedRoles[roleId];
    onRoleToggle(roleId, !isSelected, label, 'family');
  };

  const handleAddCustomRole = () => {
    if (newCustomRole.trim()) {
      const roleId = `family-${newCustomRole.toLowerCase().replace(/\s+/g, '-')}`;
      onRoleToggle(roleId, true, newCustomRole, 'family');
      setCustomRoles([
        ...customRoles,
        { id: roleId, label: newCustomRole.trim() }
      ]);
      setNewCustomRole('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddCustomRole();
    }
  };

  const handleRemoveCustomRole = (id: string) => {
    onRoleToggle(id, false, '', 'Family');
    setCustomRoles(roles => roles.filter(role => role.id !== id));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div>
          <h3 className="font-medium text-gray-800">Family</h3>
          <p className="text-sm text-gray-600">Select the family roles you want to invest in.</p>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              {familyRoles.map((role) => (
                <div
                  key={role.id}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`text-gray-500 ${selectedRoles[role.id] ? 'text-primary-600' : ''}`}>
                      {role.icon}
                    </div>
                    <span className={`text-gray-700 ${selectedRoles[role.id] ? 'font-semibold' : ''}`}>
                      {role.label}
                    </span>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    checked={!!selectedRoles[role.id]}
    onChange={() => handleRoleToggle(role.id, role.label)}
    className="sr-only peer"
  />
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
</label>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newCustomRole}
                  onChange={(e) => setNewCustomRole(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add a custom family role..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                />
                <button
                  onClick={handleAddCustomRole}
                  disabled={!newCustomRole.trim()}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 transition-colors"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {customRoles.map(role => (
                  <div
                    key={role.id}
                    className="flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full"
                  >
                    <span className="text-sm">{role.label}</span>
                    <button
                      onClick={() => handleRemoveCustomRole(role.id)}
                      className="text-primary-600 hover:text-primary-800"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyRoleCard;