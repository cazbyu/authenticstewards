import { motion } from 'framer-motion';
import RolesList from './components/RolesList';
import RoleDetail from './components/RoleDetail';
import { useState } from 'react';

// Sample role type
interface Role {
  id: number;
  name: string;
  description: string;
  image?: string;
  goals: string[];
  quote?: string;
}

const RolesPage = () => {
  // Sample roles data
  const rolesData: Role[] = [
    {
      id: 1,
      name: 'Self',
      description: 'Who I am at my core, my identity and personal growth.',
      image: 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      goals: [
        'Establish consistent meditation practice',
        'Read 12 books this year',
        'Journal weekly'
      ],
      quote: 'Be the person you needed when you were younger.'
    },
    {
      id: 2,
      name: 'Parent',
      description: 'Guiding, nurturing, and supporting my children.',
      goals: [
        'Establish family dinner tradition',
        'Have monthly one-on-one time with each child',
        'Create family mission statement'
      ],
    },
    {
      id: 3,
      name: 'Professional',
      description: 'My career, work ethic, and contribution through vocation.',
      goals: [
        'Complete professional certification',
        'Mentor two junior team members',
        'Improve presentation skills'
      ],
    },
    {
      id: 4,
      name: 'Partner',
      description: 'My relationship with my significant other.',
      goals: [
        'Weekly date night',
        'Surprise gesture once a month',
        'Take a weekend getaway quarterly'
      ],
    },
    {
      id: 5,
      name: 'Community Member',
      description: 'My contribution to and involvement in my community.',
      goals: [
        'Volunteer monthly at local organization',
        'Attend community events',
        'Support local businesses'
      ],
    },
  ];
  
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(1);
  
  const selectedRole = selectedRoleId 
    ? rolesData.find(role => role.id === selectedRoleId) 
    : null;
  
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Roles</h1>
          <p className="text-gray-600">Define and manage the key roles in your life</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <RolesList 
              roles={rolesData} 
              selectedRoleId={selectedRoleId}
              onSelectRole={setSelectedRoleId}
            />
          </div>
          <div className="lg:col-span-2">
            {selectedRole && <RoleDetail role={selectedRole} />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RolesPage;