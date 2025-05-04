const ProgressSummary = () => {
  // Sample cycle data
  const cycleProgress = 25; // Percentage complete
  const weeksCompleted = 3;
  const totalWeeks = 12;
  
  // Sample domain data for the balance wheel
  const domains = [
    { name: 'Physical', score: 70 },
    { name: 'Spiritual', score: 85 },
    { name: 'Mental', score: 60 },
    { name: 'Emotional', score: 55 },
    { name: 'Relational', score: 75 },
    { name: 'Financial', score: 50 },
    { name: 'Vocational', score: 80 },
    { name: 'Recreational', score: 45 },
  ];
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium text-gray-800">Current Cycle</h3>
        <span className="text-primary-600">Spring 2025</span>
      </div>
      
      {/* Cycle progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Cycle Progress</span>
          <span className="font-medium">{cycleProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary-600 h-2.5 rounded-full" 
            style={{ width: `${cycleProgress}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Week {weeksCompleted} of {totalWeeks}
        </div>
      </div>
      
      {/* Simple balance wheel representation */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-800 mb-3">Life Balance</h3>
        <div className="grid grid-cols-4 gap-2">
          {domains.map((domain) => (
            <div key={domain.name} className="text-center">
              <div className="relative w-full pt-[100%]">
                <div 
                  className="absolute inset-0 rounded-full border-4 border-gray-100 flex items-center justify-center"
                >
                  <div 
                    className="absolute inset-0 rounded-full bg-primary-100 border border-primary-200"
                    style={{ 
                      transform: `scale(${domain.score / 100})`,
                      opacity: domain.score / 100
                    }}
                  ></div>
                  <span className="relative text-xs font-medium text-gray-700">
                    {domain.score}
                  </span>
                </div>
              </div>
              <span className="text-xs text-gray-600 mt-1 block overflow-hidden text-ellipsis">
                {domain.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <a 
        href="/balance" 
        className="block w-full text-center text-primary-600 py-2 border border-primary-300 rounded-lg hover:bg-primary-50 transition-colors mt-4"
      >
        View Full Balance Wheel
      </a>
    </div>
  );
};

export default ProgressSummary;