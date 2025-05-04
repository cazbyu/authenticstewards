interface DailyHeaderProps {
  date: Date;
}

const DailyHeader = ({ date }: DailyHeaderProps) => {
  // For demo purposes
  const dailyStats = {
    tasks: {
      total: 8,
      completed: 3,
    },
    anchorActions: {
      total: 3,
      completed: 1,
    },
    focusTime: {
      planned: 240, // in minutes
      actual: 180, // in minutes
    },
  };
  
  // Format minutes to hours and minutes
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium text-gray-800 mb-4">Daily Summary</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-primary-50 p-3 rounded-lg text-center">
          <h4 className="text-sm text-gray-600 mb-1">Tasks</h4>
          <p className="text-xl font-semibold text-primary-700">
            {dailyStats.tasks.completed}/{dailyStats.tasks.total}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
            <div 
              className="bg-primary-600 h-1.5 rounded-full" 
              style={{ width: `${(dailyStats.tasks.completed / dailyStats.tasks.total) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-secondary-50 p-3 rounded-lg text-center">
          <h4 className="text-sm text-gray-600 mb-1">Anchor Actions</h4>
          <p className="text-xl font-semibold text-secondary-700">
            {dailyStats.anchorActions.completed}/{dailyStats.anchorActions.total}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
            <div 
              className="bg-secondary-600 h-1.5 rounded-full" 
              style={{ width: `${(dailyStats.anchorActions.completed / dailyStats.anchorActions.total) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-accent-50 p-3 rounded-lg text-center">
          <h4 className="text-sm text-gray-600 mb-1">Focus Time</h4>
          <p className="text-xl font-semibold text-accent-700">
            {formatTime(dailyStats.focusTime.actual)}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
            <div 
              className="bg-accent-600 h-1.5 rounded-full" 
              style={{ width: `${(dailyStats.focusTime.actual / dailyStats.focusTime.planned) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyHeader;