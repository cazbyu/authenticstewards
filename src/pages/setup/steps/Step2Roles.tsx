import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FamilyRoleCard from '../../../components/shared/FamilyRoleCard';
import ProfessionalRoleCard from '../../../components/shared/ProfessionalRoleCard';
import CommunityRoleCard from '../../../components/shared/CommunityRoleCard';
import RecreationRoleCard from '../../../components/shared/RecreationRoleCard';
import OtherRolesCard from '../../../components/shared/OtherRolesCard';

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
  userData: any;
  updateUserData: (data: any) => void;
}

const Step2Roles = ({ onNext, onBack, userData, updateUserData }: Step2Props) => {
  const [selectedRoles, setSelectedRoles] = useState<{
    [key: string]: { selected: boolean; label: string; category: string };
  }>({});
  const [continueEnabled, setContinueEnabled] = useState(false);

  // Track total selected roles
  const totalSelectedRoles = Object.values(selectedRoles).filter(role => role.selected).length;

  // Handle role toggle from any category
  const handleRoleToggle = (roleId: string, selected: boolean, label: string, category: string) => {
    console.log('Role toggled:', { roleId, selected, label, category }); // Debug log
    setSelectedRoles(prev => ({
      ...prev,
      [roleId]: { selected, label, category }
    }));
  };

  // Update continue button state when roles change
  useEffect(() => {
    console.log('Total selected roles:', totalSelectedRoles); // Debug log
    setContinueEnabled(totalSelectedRoles > 0);
  }, [totalSelectedRoles]);

  // Update parent component when roles change
  useEffect(() => {
    const activeRoles = Object.entries(selectedRoles)
      .filter(([_, meta]) => meta.selected)
      .map(([id, meta]) => ({
        id,
        name: meta.label,
        category: meta.category
      }));
    
    console.log('Active roles:', activeRoles); // Debug log
    updateUserData({ roles: activeRoles });
  }, [selectedRoles, updateUserData]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <Link 
        to="/weekly" 
        className="block text-center text-sm text-gray-400 hover:text-gray-600 mb-6"
      >
        Return to Planner
      </Link>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Define Your Roles
        </h2>
        <p className="text-gray-600">
          Select the roles you want to invest in. These will guide your weekly planning.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <FamilyRoleCard
          onRoleToggle={(roleId, selected, label) => handleRoleToggle(roleId, selected, label, roleId, 'Family')}
          selectedRoles={Object.fromEntries(
            Object.entries(selectedRoles)
              .filter(([_, meta]) => meta.category === 'family')
              .map(([id, meta]) => [id, meta.selected])
          )}
        />
        <ProfessionalRoleCard
          onRoleToggle={(roleId, selected) => handleRoleToggle(roleId, selected, roleId, 'professional')}
          selectedRoles={Object.fromEntries(
            Object.entries(selectedRoles)
              .filter(([_, meta]) => meta.category === 'professional')
              .map(([id, meta]) => [id, meta.selected])
          )}
        />
        <CommunityRoleCard
          onRoleToggle={(roleId, selected, label) => handleRoleToggle(roleId, selected, label, 'community')}
          selectedRoles={Object.fromEntries(
            Object.entries(selectedRoles)
              .filter(([_, meta]) => meta.category === 'community')
              .map(([id, meta]) => [id, meta.selected])
          )}
        />
        <RecreationRoleCard
          onRoleToggle={(roleId, selected) => handleRoleToggle(roleId, selected, roleId, 'recreation')}
          selectedRoles={Object.fromEntries(
            Object.entries(selectedRoles)
              .filter(([_, meta]) => meta.category === 'recreation')
              .map(([id, meta]) => [id, meta.selected])
          )}
        />
        <OtherRolesCard
          onRoleToggle={(roleId, selected) => handleRoleToggle(roleId, selected, roleId, 'other')}
          selectedRoles={Object.fromEntries(
            Object.entries(selectedRoles)
              .filter(([_, meta]) => meta.category === 'other')
              .map(([id, meta]) => [id, meta.selected])
          )}
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!continueEnabled}
          className={`
            flex-1 py-3 rounded-lg transition-colors
            ${continueEnabled
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Continue
        </button>
      </div>

      {!continueEnabled && (
        <p className="text-sm text-gray-500 text-center mt-4">
          Select at least one role to continue
        </p>
      )}
    </motion.div>
  );
};

export default Step2Roles;