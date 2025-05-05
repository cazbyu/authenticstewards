import { ChevronLeft, ChevronRight } from 'lucide-react';

const WeekSelector = () => {
  // Sample date range
  const currentWeek = {
    startDate: 'April 13, 2025',
    endDate: 'April 19, 2025',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
        <ChevronLeft size={20} className="text-gray-600" />
      </button>
      
      <div className="text-center">
        <p className="text-gray-700 font-medium">
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