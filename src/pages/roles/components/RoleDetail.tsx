import { PenSquare, Plus, Goal } from 'lucide-react';

interface Role {
  id: number;
  name: string;
  description: string;
  image?: string;
  goals: string[];
  quote?: string;
}

interface RoleDetailProps {
  role: Role;
}

const RoleDetail = ({ role }: RoleDetailProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Role header with image if available */}
      {role.image && (
        <div className="relative h-48 w-full">
          <img 
            src={role.image} 
            alt={role.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h2 className="text-2xl font-bold text-white">{role.name}</h2>
          </div>
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <PenSquare size={18} className="text-gray-700" />
          </button>
        </div>
      )}
      
      {/* Role content */}
      <div className="p-4">
        {!role.image && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{role.name}</h2>
            <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 border border-gray-200">
              <PenSquare size={18} className="text-gray-700" />
            </button>
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="text-gray-700 font-medium mb-2">Description</h3>
          <p className="text-gray-600">{role.description}</p>
        </div>
        
        {role.quote && (
          <blockquote className="bg-primary-50 border-l-4 border-primary-400 pl-4 py-2 mb-6 italic text-gray-700">
            "{role.quote}"
          </blockquote>
        )}
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-700 font-medium">Goals for this Role</h3>
            <button className="text-primary-600 flex items-center text-sm hover:text-primary-700">
              <Plus size={16} className="mr-1" />
              Add Goal
            </button>
          </div>
          
          <div className="space-y-2">
            {role.goals.map((goal, index) => (
              <div 
                key={index}
                className="p-3 bg-gray-50 border border-gray-100 rounded-lg flex items-start"
              >
                <Goal size={18} className="text-primary-600 mr-2 mt-0.5" />
                <span className="text-gray-700">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDetail;