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
  category: string;
}

interface RoleEditorProps {
  roles: Role[];
  onUpdateRoles: (roles: Role[]) => void;
  className?: string;
  compact?: boolean;
}

const RoleEditor = ({ roles, onUpdateRoles, className = '', compact = false }: RoleEditorProps) => {
  // Function to handle role selection from any category
  const handleRoleSelect = (roleId: string, category: string, selected: boolean) => {
    if (selected) {
      // Add new role
      onUpdateRoles([
        ...roles,
        { id: roleId, name: roleId, category }
      ]);
    } else {
      // Remove role
      onUpdateRoles(roles.filter(role => role.id !== roleId));
    }
  };

  // Function to handle custom role addition
  const handleAddCustomRole = (roleName: string, category: string) => {
    if (roleName.trim()) {
      onUpdateRoles([
        ...roles,
        {
          id: `${category}-${Date.now()}`,
          name: roleName.trim(),
          category
        }
      ]);
    }
  };

  // Get selected roles for each category
  const getSelectedRoles = (category: string) => {
    return roles.filter(r => r.category === category).map(r => r.id);
  };

  return (
    <div className={className}>
      {!compact && (
        <div className="space-y-4">
          <FamilyRoleCard
            selectedRoles={getSelectedRoles('family')}
            onRoleSelect={(roleId, selected) => handleRoleSelect(roleId, 'family', selected)}
            onAddCustomRole={(name) => handleAddCustomRole(name, 'family')}
          />
          <ProfessionalRoleCard
            selectedRoles={getSelectedRoles('professional')}
            onRoleSelect={(roleId, selected) => handleRoleSelect(roleId, 'professional', selected)}
            onAddCustomRole={(name) => handleAddCustomRole(name, 'professional')}
          />
          <CommunityRoleCard
            selectedRoles={getSelectedRoles('community')}
            onRoleSelect={(roleId, selected) => handleRoleSelect(roleId, 'community', selected)}
            onAddCustomRole={(name) => handleAddCustomRole(name, 'community')}
          />
          <RecreationRoleCard
            selectedRoles={getSelectedRoles('recreation')}
            onRoleSelect={(roleId, selected) => handleRoleSelect(roleId, 'recreation', selected)}
            onAddCustomRole={(name) => handleAddCustomRole(name, 'recreation')}
          />
          <OtherRolesCard
            selectedRoles={getSelectedRoles('other')}
            onAddCustomRole={(name) => handleAddCustomRole(name, 'other')}
          />
        </div>
      )}
    </div>
  );
};

export default RoleEditor;