import { useState } from 'react';
import RoleEditor from '../../../components/shared/RoleEditor';

interface Role {
  id: string;
  name: string;
  description?: string;
}

const RoleSettings = () => {
  const [roles, setRoles] = useState<Role[]>([
    { id: '1', name: 'Self', description: 'Personal growth and well-being' },
    { id: '2', name: 'Professional', description: 'Career and work life' },
    { id: '3', name: 'Parent', description: 'Nurturing and guiding children' },
    { id: '4', name: 'Partner', description: 'Relationship with significant other' },
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Life Roles</h3>
        <p className="text-gray-600 text-sm mb-6">
          These are the identity roles that shape your weekly planning. Anchor Actions are tied to roles you care about.
        </p>

        <RoleEditor
          roles={roles}
          onUpdateRoles={setRoles}
          className="mb-6"
        />
      </div>

      <div className="pt-4 border-t border-gray-200">
        <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default RoleSettings;