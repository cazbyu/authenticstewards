import { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, X } from 'lucide-react';

interface OtherRole {
  id: string;
  label: string;
}

const OtherRolesCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newRole, setNewRole] = useState('');
  const [otherRoles, setOtherRoles] = useState<OtherRole[]>([]);

  const handleAddRole = () => {
    if (newRole.trim()) {
      setOtherRoles([
        ...otherRoles,
        { id: Date.now().toString(), label: newRole.trim() }
      ]);
      setNewRole('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddRole();
    }
  };

  const handleRemoveRole = (id: string) => {
    setOtherRoles(roles => roles.filter(role => role.id !== id));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div>
          <h3 className="font-medium text-gray-800">Other Roles</h3>
          <p className="text-sm text-gray-600">Other roles you want to invest in.</p>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-4">
          <div className="space-y-4">
            {/* Input field */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a role (e.g., Artist, Activist, Caregiver...)"
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
              />
              <button
                onClick={handleAddRole}
                disabled={!newRole.trim()}
                className="px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>

            {/* Role chips */}
            <div className="flex flex-wrap gap-2">
              {otherRoles.map(role => (
                <div
                  key={role.id}
                  className="flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full"
                >
                  <span className="text-sm">{role.label}</span>
                  <button
                    onClick={() => handleRemoveRole(role.id)}
                    className="text-primary-600 hover:text-primary-800"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            {otherRoles.length === 0 && (
              <p className="text-sm text-gray-500 text-center italic">
                No custom roles added yet
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherRolesCard;