import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const WeeklyReflectionList = () => {
  const [expandedReflectionId, setExpandedReflectionId] = useState<number | null>(1);
  
  // Sample weekly reflections
  const reflections = [
    {
      id: 1,
      week: 'Week 3',
      dateRange: 'April 10-16, 2025',
      wins: [
        'Completed project proposal ahead of schedule',
        'Established family dinner routine on Wednesdays',
        'Meditated 5 out of 7 days',
      ],
      challenges: [
        'Struggled with focus during afternoon hours',
        'Missed workout sessions on Tuesday and Thursday',
        'Email management became overwhelming',
      ],
      insights: 'I noticed that my energy levels are highest in the morning, making it the optimal time for deep work and creative tasks. Setting boundaries around email checking has been challenging but crucial.',
      nextWeekFocus: 'Prioritize morning focus blocks for important work. Establish a specific time for email management. Recommit to consistent exercise schedule.',
      roleProgress: {
        Professional: 'On track',
        Parent: 'On track',
        Self: 'Needs attention',
        Partner: 'On track',
      },
    },
    {
      id: 2,
      week: 'Week 2',
      dateRange: 'April 3-9, 2025',
      wins: [
        'Initiated project planning with team',
        'Had meaningful conversation with children about values',
        'Completed all scheduled workout sessions',
      ],
      challenges: [
        'Procrastinated on financial review',
        'Meditation practice was inconsistent',
        'Felt overwhelmed by competing priorities',
      ],
      insights: 'Taking time to plan at the beginning of each day made a significant difference in productivity. I also noticed that when I skip meditation, my stress levels increase noticeably.',
      nextWeekFocus: 'Establish a consistent meditation routine. Schedule specific time for financial tasks. Continue daily planning habit.',
      roleProgress: {
        Professional: 'On track',
        Parent: 'On track',
        Self: 'Needs attention',
        Partner: 'Needs attention',
      },
    },
  ];
  
  const toggleReflectionExpand = (reflectionId: number) => {
    setExpandedReflectionId(expandedReflectionId === reflectionId ? null : reflectionId);
  };
  
  return (
    <div className="space-y-4">
      {reflections.map(reflection => (
        <div key={reflection.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Reflection header */}
          <div 
            className={`p-4 cursor-pointer ${
              expandedReflectionId === reflection.id ? 'bg-primary-50 border-b border-primary-100' : ''
            }`}
            onClick={() => toggleReflectionExpand(reflection.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar size={18} className="text-primary-600 mr-2" />
                <div>
                  <h3 className="font-medium text-gray-800">{reflection.week}</h3>
                  <p className="text-sm text-gray-600">{reflection.dateRange}</p>
                </div>
              </div>
              <button>
                {expandedReflectionId === reflection.id ? (
                  <ChevronUp size={20} className="text-gray-600" />
                ) : (
                  <ChevronDown size={20} className="text-gray-600" />
                )}
              </button>
            </div>
          </div>
          
          {/* Expanded reflection content */}
          {expandedReflectionId === reflection.id && (
            <div className="p-4 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Wins</h4>
                  <ul className="list-disc list-inside text-gray-600 pl-2">
                    {reflection.wins.map((win, index) => (
                      <li key={index}>{win}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Challenges</h4>
                  <ul className="list-disc list-inside text-gray-600 pl-2">
                    {reflection.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Key Insights</h4>
                <p className="text-gray-600">{reflection.insights}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Next Week Focus</h4>
                <p className="text-gray-600">{reflection.nextWeekFocus}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Role Progress</h4>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(reflection.roleProgress).map(([role, status]) => (
                    <div key={role} className="flex justify-between border-b border-gray-100 py-1">
                      <span className="text-gray-700">{role}</span>
                      <span className={`${
                        status === 'On track' 
                          ? 'text-green-600' 
                          : 'text-orange-500'
                      }`}>
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeeklyReflectionList;