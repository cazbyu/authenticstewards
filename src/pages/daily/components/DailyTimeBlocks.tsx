const DailyTimeBlocks = () => {
  // Sample time blocks
  const timeBlocks = [
    { id: 1, title: 'Morning Meditation', time: '7:00 AM - 7:30 AM', category: 'self' },
    { id: 2, title: 'Team Standup', time: '9:00 AM - 9:30 AM', category: 'work' },
    { id: 3, title: 'Project Planning', time: '10:00 AM - 12:00 PM', category: 'work' },
    { id: 4, title: 'Lunch Break', time: '12:00 PM - 1:00 PM', category: 'break' },
    { id: 5, title: 'Focus Time: Project Proposal', time: '1:00 PM - 3:00 PM', category: 'deep-work' },
    { id: 6, title: 'Client Call', time: '3:30 PM - 4:00 PM', category: 'work' },
    { id: 7, title: 'Family Dinner', time: '6:30 PM - 7:30 PM', category: 'family' },
    { id: 8, title: 'Reading Time', time: '9:00 PM - 10:00 PM', category: 'self' },
  ];
  
  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'work':
        return 'border-blue-200 bg-blue-50';
      case 'deep-work':
        return 'border-indigo-200 bg-indigo-50';
      case 'self':
        return 'border-primary-200 bg-primary-50';
      case 'family':
        return 'border-green-200 bg-green-50';
      case 'break':
        return 'border-gray-200 bg-gray-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };
  
  // Get category text color
  const getCategoryTextColor = (category: string) => {
    switch (category) {
      case 'work':
        return 'text-blue-800';
      case 'deep-work':
        return 'text-indigo-800';
      case 'self':
        return 'text-primary-800';
      case 'family':
        return 'text-green-800';
      case 'break':
        return 'text-gray-800';
      default:
        return 'text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium text-gray-800 mb-4">Today's Schedule</h3>
      
      <div className="space-y-3">
        {timeBlocks.map(block => (
          <div 
            key={block.id}
            className={`p-3 border rounded-lg ${getCategoryColor(block.category)}`}
          >
            <h4 className={`font-medium ${getCategoryTextColor(block.category)}`}>{block.title}</h4>
            <p className="text-sm text-gray-600">{block.time}</p>
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
        Add Time Block
      </button>
    </div>
  );
};

export default DailyTimeBlocks;