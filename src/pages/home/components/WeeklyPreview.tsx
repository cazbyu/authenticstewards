const WeeklyPreview = () => {
  // Sample week days - this would normally come from an actual date calculation
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
  
  // Adjusted to match weekdays array (Monday first)
  const currentDayIndex = today === 0 ? 6 : today - 1;
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between mb-4">
        <div className="text-gray-600">Week 3 of 12</div>
        <div className="text-gray-600">April 10-16, 2025</div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {weekdays.map((day, index) => (
          <div 
            key={day} 
            className={`text-center py-3 rounded-lg ${
              index === currentDayIndex 
                ? 'bg-primary-100 text-primary-700 font-medium' 
                : 'text-gray-600'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
          <span className="text-gray-600">Anchor Actions Completed</span>
          <span className="font-medium">8 / 12</span>
        </div>
        <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
          <span className="text-gray-600">Goal Progress</span>
          <span className="font-medium">On Track</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Weekly Reflection</span>
          <span className="text-primary-600">Scheduled for Sunday</span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPreview;