import { useState } from 'react';
import { X, Edit2, Trash2, Plus } from 'lucide-react';
import FamilyRoleCard from './FamilyRoleCard';
import ProfessionalRoleCard from './ProfessionalRoleCard';
import CommunityRoleCard from './CommunityRoleCard';
import RecreationRoleCard from './RecreationRoleCard';
import OtherRolesCard from './OtherRolesCard';

interface Role {
  id: string;
  name: string;
  description?: string;
}

interface RoleEditorProps {
  roles: Role[];
  onUpdateRoles: (roles: Role[]) => void;
  className?: string;
  compact?: boolean;
}

const RoleEditor = ({ roles, onUpdateRoles, className = '', compact = false }: RoleEditorProps) => {
  const [newRole, setNewRole] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddRole = () => {
    if (newRole.trim()) {
      onUpdateRoles([
        ...roles,
        { id: Date.now().toString(), name: newRole.trim() }
      ]);
      setNewRole('');
    }
  };

  const handleDeleteRole = (id: string) => {
    onUpdateRoles(roles.filter(role => role.id !== id));
  };

  const handleUpdateRole = (id: string, newName: string) => {
    onUpdateRoles(
      roles.map(role => 
        role.id === id ? { ...role, name: newName } : role
      )
    );
    setEditingId(null);
  };

  return (
    <div className={className}>
      {!compact && (
        <>
          <div className="space-y-4">
            <FamilyRoleCard />
            <ProfessionalRoleCard />
            <CommunityRoleCard />
            <RecreationRoleCard />
            <OtherRolesCard />
          </div>
        </>
      )}
    </div>
  );
};

export default RoleEditor;