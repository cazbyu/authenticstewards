const DailyReflection = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium text-gray-800 mb-2">Daily Reflection</h3>
      <p className="text-gray-600 text-sm mb-4">
        Take a moment to reflect on your day and prepare for tomorrow.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            What went well today?
          </label>
          <textarea 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
            rows={3}
            placeholder="Enter your thoughts here..."
          ></textarea>
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            What could have gone better?
          </label>
          <textarea 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
            rows={3}
            placeholder="Enter your thoughts here..."
          ></textarea>
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          What are your top 3 priorities for tomorrow?
        </label>
        <input 
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
          placeholder="Priority 1"
        />
        <input 
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
          placeholder="Priority 2"
        />
        <input 
          type="text"
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
          placeholder="Priority 3"
        />
      </div>
      
      <button className="mt-4 w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
        Save Reflection
      </button>
    </div>
  );
};

export default DailyReflection;