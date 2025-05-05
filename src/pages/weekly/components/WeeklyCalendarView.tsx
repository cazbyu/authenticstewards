import { useState } from 'react';
import { Plus } from 'lucide-react';

const WeeklyCalendarView = () => {
  // Sample week days starting with Sunday
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Time slots from 6 AM to 10 PM
  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = i + 6;
    return hour < 12 ? `${hour}:00 AM` : hour === 12 ? '12:00 PM' : `${hour - 12}:00 PM`;
  });

  // Sample events
  const events = [
    { id: 1, day: 'Monday', title: 'Team standup', startTime: '9:00 AM', duration: 30, category: 'work' },
    { id: 2, day: 'Monday', title: 'Project review', startTime: '2:00 PM', duration: 60, category: 'work' },
    { id: 3, day: 'Tuesday', title: 'Dentist appointment', startTime: '11:00 AM', duration: 60, category: 'personal' },
    { id: 4, day: 'Wednesday', title: 'Weekly family dinner', startTime: '6:30 PM', duration: 90, category: 'family' },
    { id: 5, day: 'Thursday', title: 'Meditation session', startTime: '7:00 AM', duration: 30, category: 'self' },
    { id: 6, day: 'Friday', title: 'Team retrospective', startTime: '3:00 PM', duration: 60, category: 'work' },
    { id: 7, day: 'Saturday', title: 'Farmers market', startTime: '10:00 AM', duration: 120, category: 'personal' },
    { id: 8, day: 'Sunday', title: 'Weekly planning', startTime: '6:00 PM', duration: 60, category: 'self' },
  ];

  // Get category styles
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'work':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'personal':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'family':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'self':
        return 'bg-primary-100 text-primary-800 border-primary-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Get event position based on time
  const getEventPosition = (startTime: string) => {
    const [hour, minute] = startTime.split(':');
    const isPM = startTime.includes('PM');
    let hourNum = parseInt(hour);
    if (isPM && hourNum !== 12) hourNum += 12;
    if (!isPM && hourNum === 12) hourNum = 0;
    return (hourNum - 6) * 60 + parseInt(minute);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Weekly Schedule</h2>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <Plus size={16} />
            <span>Add Event</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Header row with days */}
          <div className="grid grid-cols-8 border-b border-gray-200">
            <div className="p-3 text-sm font-medium text-gray-500">Time</div>
            {weekdays.map(day => (
              <div key={day} className="p-3 text-sm font-medium text-gray-700 text-center border-l border-gray-200">
                {day}
              </div>
            ))}
          </div>

          {/* Time slots */}
          <div className="relative">
            {timeSlots.map((time, index) => (
              <div key={time} className="grid grid-cols-8 border-b border-gray-200">
                {/* Time label */}
                <div className="p-3 text-sm text-gray-500 border-r border-gray-200">
                  {time}
                </div>
                {/* Day columns */}
                {weekdays.map(day => (
                  <div key={`${day}-${time}`} className="h-16 border-l border-gray-200 relative">
                    {events
                      .filter(event => event.day === day && event.startTime === time)
                      .map(event => (
                        <div
                          key={event.id}
                          className={`absolute left-0 right-0 mx-1 p-2 rounded border ${getCategoryStyles(event.category)}`}
                          style={{
                            top: `${getEventPosition(event.startTime) % 60}px`,
                            height: `${(event.duration / 60) * 64}px`,
                            zIndex: 10,
                          }}
                        >
                          <div className="text-sm font-medium truncate">{event.title}</div>
                          <div className="text-xs opacity-75">{event.startTime}</div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendarView;