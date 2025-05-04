import { ChevronLeft, ChevronRight } from 'lucide-react';

const WeekSelector = () => {
  // Sample week data with updated dates
  const currentWeek = {
    number: 3,
    startDate: 'April 13, 2025',
    endDate: 'April 19, 2025',
    cycleNumber: 1,
    cycleTotalWeeks: 12,
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
        <ChevronLeft size={20} className="text-gray-600" />
      </button>
      
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Week {currentWeek.number} of {currentWeek.cycleTotalWeeks}
        </h2>
        <p className="text-gray-600 text-sm">
          {currentWeek.startDate} - {currentWeek.endDate}
        </p>
      </div>
      
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
        <ChevronRight size={20} className="text-gray-600" />
      </button>
    </div>
  );
};

export default WeekSelector;