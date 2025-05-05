import { Plus } from 'lucide-react';

interface Role {
  id: number;
  name: string;
  description: string;
  image?: string;
  goals: string[];
  quote?: string;
}

interface RolesListProps {
  roles: Role[];
  selectedRoleId: number | null;
  onSelectRole: (id: number) => void;
}

const RolesList = ({ roles, selectedRoleId, onSelectRole }: RolesListProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Your Roles</h2>
        <button className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors">
          <Plus size={18} />
        </button>
      </div>
      
      <div className="space-y-2">
        {roles.map(role => (
          <div 
            key={role.id}
            onClick={() => onSelectRole(role.id)}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              selectedRoleId === role.id
                ? 'bg-primary-100 border border-primary-200'
                : 'hover:bg-gray-50 border border-gray-100'
            }`}
          >
            <h3 className={`font-medium ${
              selectedRoleId === role.id ? 'text-primary-700' : 'text-gray-800'
            }`}>
              {role.name}
            </h3>
            <p className="text-sm text-gray-600 truncate">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesList;