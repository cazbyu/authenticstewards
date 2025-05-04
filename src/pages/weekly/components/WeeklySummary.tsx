const WeeklySummary = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Reflection & Planning</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-700 mb-2">Last Week Reflection</h3>
          <p className="text-gray-600 text-sm">
            What went well? What could improve? What did you learn?
          </p>
          <textarea 
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
            rows={3}
            placeholder="Enter your reflections here..."
          ></textarea>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-700 mb-2">This Week Intentions</h3>
          <p className="text-gray-600 text-sm">
            What are your key focus areas? What matters most?
          </p>
          <textarea 
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
            rows={3}
            placeholder="Enter your intentions here..."
          ></textarea>
        </div>
      </div>
      
      <button className="mt-4 w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
        Save Weekly Plan
      </button>
    </div>
  );
};

export default WeeklySummary;