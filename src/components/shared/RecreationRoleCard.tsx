import { useState } from 'react';
import { ChevronDown, ChevronUp, Activity, Flag, Users, Mountain, Music, Palette, Edit } from 'lucide-react';

interface RecreationRole {
  id: string;
  label: string;
  selected: boolean;
  icon: React.ReactNode;
}

const RecreationRoleCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [otherRole, setOtherRole] = useState('');

  const [recreationRoles, setRecreationRoles] = useState<RecreationRole[]>([
    { id: 'athlete', label: 'Athlete', selected: false, icon: <Activity size={20} /> },
    { id: 'team-captain', label: 'Team Captain', selected: false, icon: <Flag size={20} /> },
    { id: 'club-member', label: 'Club Member', selected: false, icon: <Users size={20} /> },
    { id: 'adventurer', label: 'Adventurer', selected: false, icon: <Mountain size={20} /> },
    { id: 'performer', label: 'Performer', selected: false, icon: <Music size={20} /> },
    { id: 'hobbyist', label: 'Hobbyist', selected: false, icon: <Palette size={20} /> },
  ]);

  const toggleRole = (id: string) => {
    setRecreationRoles(roles =>
      roles.map(role =>
        role.id === id ? { ...role, selected: !role.selected } : role
      )
    );
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
            {/* Predefined roles */}
            {recreationRoles.map(role => (
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

            {/* Other role input */}
            <div className="flex items-center space-x-3 p-2">
              <div className="text-gray-500">
                <Edit size={20} />
              </div>
              <input
                type="text"
                value={otherRole}
                onChange={(e) => setOtherRole(e.target.value)}
                placeholder="Write in a recreational role..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecreationRoleCard;