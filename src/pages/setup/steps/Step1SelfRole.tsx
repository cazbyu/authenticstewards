import { Upload } from 'lucide-react';

interface Step1Props {
  userData: any;
  updateUserData: (data: any) => void;
}

const Step1SelfRole = ({ userData, updateUserData }: Step1Props) => {
  const handleImageChange = () => {
    // In a real app, this would handle file uploading
    // For now, we'll just use a placeholder
    updateUserData({ selfImage: 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' });
  };

  const handleMissionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateUserData({ missionStatement: e.target.value });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Define Your "Self" Role</h2>
      <p className="text-gray-600 mb-6">
        Start your journey by uploading a meaningful image that represents your "why" and create a personal mission statement.
      </p>

      {userData.selfImage ? (
        <div className="mb-6">
          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-2">
            <img 
              src={userData.selfImage} 
              alt="Your why" 
              className="w-full h-full object-cover"
            />
            <button 
              onClick={handleImageChange}
              className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <Upload size={18} className="text-gray-700" />
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center">Click the icon to change your image</p>
        </div>
      ) : (
        <div 
          onClick={handleImageChange}
          className="w-full h-48 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center mb-6 cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition-colors"
        >
          <Upload size={32} className="text-gray-400 mb-2" />
          <p className="text-gray-500">Upload your "why" image</p>
          <p className="text-sm text-gray-400 mt-1">Choose an image that inspires you</p>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Personal Mission Statement (Optional)
        </label>
        <textarea
          value={userData.missionStatement}
          onChange={handleMissionChange}
          placeholder="I am at my best when I..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
          rows={4}
        ></textarea>
      </div>
    </div>
  );
};

export default Step1SelfRole;