const WeeklyCalendarView = () => {
  // Sample week days
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Sample events
  const events = [
    { id: 1, day: 'Monday', title: 'Team standup', time: '9:00 AM', duration: 30, category: 'work' },
    { id: 2, day: 'Monday', title: 'Project review', time: '2:00 PM', duration: 60, category: 'work' },
    { id: 3, day: 'Tuesday', title: 'Dentist appointment', time: '11:00 AM', duration: 60, category: 'personal' },
    { id: 4, day: 'Wednesday', title: 'Weekly family dinner', time: '6:30 PM', duration: 90, category: 'family' },
    { id: 5, day: 'Thursday', title: 'Meditation session', time: '7:00 AM', duration: 30, category: 'self' },
    { id: 6, day: 'Friday', title: 'Team retrospective', time: '3:00 PM', duration: 60, category: 'work' },
    { id: 7, day: 'Saturday', title: 'Farmers market', time: '10:00 AM', duration: 120, category: 'personal' },
    { id: 8, day: 'Sunday', title: 'Weekly planning', time: '6:00 PM', duration: 60, category: 'self' },
  ];

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'work':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'personal':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'family':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'self':
        return 'bg-primary-100 text-primary-700 border-primary-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Schedule</h2>
      
      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 min-w-[700px]">
          {/* Day headers */}
          {weekdays.map(day => (
            <div key={day} className="p-2 border-b border-gray-200 font-medium text-gray-700 text-center">
              {day}
            </div>
          ))}
          
          {/* Calendar cells */}
          {weekdays.map(day => (
            <div key={`cell-${day}`} className="h-80 border-r border-gray-100 p-2 relative">
              {events
                .filter(event => event.day === day)
                .map(event => (
                  <div 
                    key={event.id}
                    className={`p-2 mb-2 text-sm rounded border ${getCategoryColor(event.category)}`}
                  >
                    <div className="font-medium">{event.title}</div>
                    <div className="text-xs">{event.time}</div>
                  </div>
                ))
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendarView;