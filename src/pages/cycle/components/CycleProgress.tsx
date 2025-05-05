const CycleProgress = () => {
  // Cycle data with updated dates
  const cycleData = {
    name: 'Spring 2025',
    startDate: 'March 30, 2025',
    endDate: 'June 21, 2025',
    currentWeek: 3,
    totalWeeks: 12,
    progress: 25, // percentage
  };
  
  // Generate weeks array
  const weeks = Array.from({ length: cycleData.totalWeeks }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{cycleData.name}</h2>
          <p className="text-gray-600">
            {cycleData.startDate} to {cycleData.endDate}
          </p>
        </div>
        
        <div className="mt-3 md:mt-0">
          <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg">
            Week {cycleData.currentWeek} of {cycleData.totalWeeks}
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mb-2">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary-600 h-2.5 rounded-full" 
            style={{ width: `${cycleData.progress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Week indicators */}
      <div className="flex justify-between mb-4">
        <div className="text-sm text-gray-500">0%</div>
        <div className="text-sm text-gray-500">50%</div>
        <div className="text-sm text-gray-500">100%</div>
      </div>
      
      {/* Week markers */}
      <div className="grid grid-cols-12 gap-1">
        {weeks.map(week => (
          <div 
            key={week}
            className={`text-center py-1 text-xs rounded ${
              week === cycleData.currentWeek
                ? 'bg-primary-600 text-white'
                : week < cycleData.currentWeek
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-600'
            }`}
          >
            {week}
          </div>
        ))}
      </div>
      
      {/* Reset week */}
      <div className="mt-4 text-center">
        <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-lg text-sm">
          Authentic Reset: Week 13 (June 22 - June 28)
        </div>
      </div>
    </div>
  );
};

export default CycleProgress;