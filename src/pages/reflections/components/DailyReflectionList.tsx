import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const DailyReflectionList = () => {
  const [expandedReflectionId, setExpandedReflectionId] = useState<number | null>(1);
  
  // Sample reflections
  const reflections = [
    {
      id: 1,
      date: 'April 15, 2025',
      highlights: 'Completed the project proposal ahead of schedule. Had a great team meeting where everyone contributed ideas.',
      improvements: 'Got distracted by emails in the morning. Could have prioritized deep work before checking messages.',
      gratitude: 'Grateful for my supportive team and the opportunity to lead this project.',
      tomorrowPriorities: ['Finalize project timeline', 'Prepare presentation for stakeholders', 'Schedule team check-ins'],
    },
    {
      id: 2,
      date: 'April 14, 2025',
      highlights: 'Had a productive morning focusing on the most important tasks. Family dinner was meaningful with great conversations.',
      improvements: 'Spent too much time on social media during breaks. Could improve time management between meetings.',
      gratitude: 'Grateful for the insights shared by my mentor during our call.',
      tomorrowPriorities: ['Draft project proposal', 'Review quarterly goals', 'Meditation session'],
    },
    {
      id: 3,
      date: 'April 13, 2025',
      highlights: 'Meditation session was particularly insightful. Made progress on personal writing project.',
      improvements: 'Procrastinated on starting the financial review. Need to tackle difficult tasks earlier in the day.',
      gratitude: 'Grateful for the peaceful morning routine and time for self-reflection.',
      tomorrowPriorities: ['Prepare for team meeting', 'Follow up on client emails', 'Start financial review'],
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
                <h3 className="font-medium text-gray-800">{reflection.date}</h3>
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
                  <h4 className="font-medium text-gray-700 mb-2">Highlights</h4>
                  <p className="text-gray-600">{reflection.highlights}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Areas for Improvement</h4>
                  <p className="text-gray-600">{reflection.improvements}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Gratitude</h4>
                <p className="text-gray-600">{reflection.gratitude}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Tomorrow's Priorities</h4>
                <ul className="list-disc list-inside text-gray-600 pl-2">
                  {reflection.tomorrowPriorities.map((priority, index) => (
                    <li key={index}>{priority}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DailyReflectionList;