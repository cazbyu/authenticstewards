interface Step3Props {
  userData: any;
  updateUserData: (data: any) => void;
}

const Step3Preferences = ({ userData, updateUserData }: Step3Props) => {
  const handleChange = (field: string, value: string) => {
    updateUserData({ [field]: value });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Set Your Preferences</h2>
      <p className="text-gray-600 mb-6">
        Customize your planning experience to match your natural rhythms and preferences.
      </p>

      <div className="space-y-6">
        {/* Start day preference */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Start of Week
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleChange('startDay', 'Sunday')}
              className={`p-3 rounded-lg border ${
                userData.startDay === 'Sunday'
                  ? 'bg-primary-100 border-primary-300 text-primary-700'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              Sunday
            </button>
            <button
              onClick={() => handleChange('startDay', 'Monday')}
              className={`p-3 rounded-lg border ${
                userData.startDay === 'Monday'
                  ? 'bg-primary-100 border-primary-300 text-primary-700'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              Monday
            </button>
          </div>
        </div>

        {/* Rhythm preference */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Planning Rhythm
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleChange('rhythmPreference', 'Morning')}
              className={`p-3 rounded-lg border ${
                userData.rhythmPreference === 'Morning'
                  ? 'bg-primary-100 border-primary-300 text-primary-700'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              Morning
            </button>
            <button
              onClick={() => handleChange('rhythmPreference', 'Evening')}
              className={`p-3 rounded-lg border ${
                userData.rhythmPreference === 'Evening'
                  ? 'bg-primary-100 border-primary-300 text-primary-700'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              Evening
            </button>
          </div>
        </div>

        {/* Language selector */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Language
          </label>
          <select
            value={userData.language}
            onChange={(e) => handleChange('language', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Swahili">Swahili</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Step3Preferences;