import { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Users, Baby, Shield as Child, Flower, Umbrella, UserRound, GraduationCap, Rocket, HeartHandshake, Sliders, UsersRound, UserCircle2, User, Edit, X, Feather, Sun } from 'lucide-react';

interface FamilyRole {
  id: string;
  label: string;
  selected: boolean;
  icon: React.ReactNode;
}

interface CustomRole {
  id: string;
  label: string;
}

const FamilyRoleCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newCustomRole, setNewCustomRole] = useState('');
  const [customRoles, setCustomRoles] = useState<CustomRole[]>([]);
  
  const [familyRoles, setFamilyRoles] = useState<FamilyRole[]>([
    // Core family roles
    { id: 'mother', label: 'Mother', selected: false, icon: <Heart size={20} /> },
    { id: 'father', label: 'Father', selected: false, icon: <UserRound size={20} /> },
    { id: 'partner', label: 'Partner', selected: false, icon: <HeartHandshake size={20} /> },
    { id: 'spouse', label: 'Spouse', selected: false, icon: <HeartHandshake size={20} /> },
    { id: 'daughter', label: 'Daughter', selected: false, icon: <Baby size={20} /> },
    { id: 'son', label: 'Son', selected: false, icon: <Child size={20} /> },
    { id: 'sister', label: 'Sister', selected: false, icon: <User size={20} /> },
    { id: 'brother', label: 'Brother', selected: false, icon: <UserCircle2 size={20} /> },
    { id: 'grandmother', label: 'Grandmother', selected: false, icon: <Flower size={20} /> },
    { id: 'grandfather', label: 'Grandfather', selected: false, icon: <Umbrella size={20} /> },
    { id: 'aunt', label: 'Aunt', selected: false, icon: <Users size={20} /> },
    { id: 'uncle', label: 'Uncle', selected: false, icon: <UserRound size={20} /> },
    { id: 'niece', label: 'Niece', selected: false, icon: <GraduationCap size={20} /> },
    { id: 'nephew', label: 'Nephew', selected: false, icon: <Rocket size={20} /> },
    { id: 'stepmother', label: 'Stepmother', selected: false, icon: <Sliders size={20} /> },
    { id: 'stepfather', label: 'Stepfather', selected: false, icon: <Sliders size={20} /> },
    { id: 'cousin', label: 'Cousin', selected: false, icon: <UsersRound size={20} /> },
    
    // In-law roles
    { id: 'mother-in-law', label: 'Mother-in-law', selected: false, icon: <Feather size={20} /> },
    { id: 'father-in-law', label: 'Father-in-law', selected: false, icon: <Umbrella size={20} /> },
    { id: 'sister-in-law', label: 'Sister-in-law', selected: false, icon: <UserRound size={20} /> },
    { id: 'brother-in-law', label: 'Brother-in-law', selected: false, icon: <UserRound size={20} /> },
    { id: 'son-in-law', label: 'Son-in-law', selected: false, icon: <Child size={20} /> },
    { id: 'daughter-in-law', label: 'Daughter-in-law', selected: false, icon: <Baby size={20} /> },
    { id: 'grandmother-in-law', label: 'Grandmother-in-law', selected: false, icon: <Flower size={20} /> },
    { id: 'grandfather-in-law', label: 'Grandfather-in-law', selected: false, icon: <Sun size={20} /> },
  ]);

  const toggleRole = (id: string) => {
    setFamilyRoles(roles =>
      roles.map(role =>
        role.id === id ? { ...role, selected: !role.selected } : role
      )
    );
  };

  const handleAddCustomRole = () => {
    if (newCustomRole.trim()) {
      setCustomRoles([
        ...customRoles,
        { id: Date.now().toString(), label: newCustomRole.trim() }
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
    setCustomRoles(roles => roles.filter(role => role.id !== id));
  };

  // Group roles by category
  const coreRoles = familyRoles.slice(0, 17);
  const inLawRoles = familyRoles.slice(17);

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
          {/* Core family roles */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Core Family</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {coreRoles.map(role => (
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
            </div>
          </div>

          {/* In-law roles */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Extended Family</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {inLawRoles.map(role => (
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
            </div>
          </div>

          {/* Custom role input */}
          <div className="mt-6 space-y-4">
            <div className="flex gap-2">
              <div className="text-gray-500">
                <Edit size={20} />
              </div>
              <input
                type="text"
                value={newCustomRole}
                onChange={(e) => setNewCustomRole(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a custom family role..."
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

            {/* Custom role chips */}
            <div className="flex flex-wrap gap-2">
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
      )}
    </div>
  );
};

export default FamilyRoleCard;