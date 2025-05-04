import { CheckCircle } from 'lucide-react';

interface Step4Props {
  userData: any;
}

const Step4Confirm = ({ userData }: Step4Props) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Begin Your Journey</h2>
      <p className="text-gray-600 mb-6">
        Confirm your settings and start your Authentic Planner experience. You can always adjust these settings later.
      </p>

      <div className="bg-gray-50 p-4 rounded-xl mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Your "Self" Role</h3>
        <div className="flex items-center">
          {userData.selfImage && (
            <img 
              src={userData.selfImage} 
              alt="Your why" 
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
          )}
          <div>
            <p className="text-sm text-gray-600">
              {userData.missionStatement || "No mission statement provided"}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-xl mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Your Roles</h3>
        <div className="flex flex-wrap gap-2">
          {userData.roles && userData.roles.map((role: string) => (
            <span 
              key={role} 
              className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-xl">
        <h3 className="font-medium text-gray-700 mb-2">Your Preferences</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-700">
            <CheckCircle size={16} className="text-secondary-500 mr-2" />
            <span>Week starts on <strong>{userData.startDay}</strong></span>
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle size={16} className="text-secondary-500 mr-2" />
            <span><strong>{userData.rhythmPreference}</strong> planning rhythm</span>
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle size={16} className="text-secondary-500 mr-2" />
            <span>Language: <strong>{userData.language}</strong></span>
          </li>
        </ul>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-700">
          Click "Complete Setup" below to start your first Authentic Cycle
        </p>
      </div>
    </div>
  );
};

export default Step4Confirm;