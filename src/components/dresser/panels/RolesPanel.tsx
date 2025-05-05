import { useEffect } from 'react';
import { Users } from 'lucide-react';

const RolesPanel = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-800">Your Life Roles</h3>
      <p className="text-sm text-gray-600">
        View and manage your life roles
      </p>
      <div className="bg-gray-50 rounded-lg p-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <Users size={24} className="text-gray-400" />
          <p className="text-gray-500">
            Role management will be available soon
          </p>
          <a 
            href="/settings"
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            Manage roles in Settings →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RolesPanel;