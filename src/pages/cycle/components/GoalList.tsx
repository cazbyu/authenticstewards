import { useState } from 'react';
import { Plus, ChevronDown, ChevronUp, Edit2, Trash2 } from 'lucide-react';

const GoalList = () => {
  const [expandedGoalId, setExpandedGoalId] = useState<number | null>(1);
  
  // Sample goals
  const goals = [
    {
      id: 1,
      title: 'Complete Professional Certification',
      description: 'Finish all coursework and pass the final exam for industry certification.',
      role: 'Professional',
      domain: 'Vocational',
      progress: 65,
      tasks: [
        { id: 1, title: 'Complete module 3 coursework', completed: true },
        { id: 2, title: 'Complete module 4 coursework', completed: true },
        { id: 3, title: 'Take practice exam', completed: false },
        { id: 4, title: 'Schedule final exam', completed: false },
        { id: 5, title: 'Pass final exam', completed: false },
      ],
    },
    {
      id: 2,
      title: 'Establish Family Dinner Tradition',
      description: 'Create a weekly family dinner tradition with meaningful conversations.',
      role: 'Parent',
      domain: 'Relational',
      progress: 40,
      tasks: [
        { id: 1, title: 'Research dinner conversation starters', completed: true },
        { id: 2, title: 'Create meal plan rotation', completed: true },
        { id: 3, title: 'Host first formal family dinner', completed: false },
        { id: 4, title: 'Get feedback and adjust format', completed: false },
      ],
    },
    {
      id: 3,
      title: 'Establish Consistent Meditation Practice',
      description: 'Develop a daily meditation practice of at least 15 minutes.',
      role: 'Self',
      domain: 'Spiritual',
      progress: 30,
      tasks: [
        { id: 1, title: 'Research meditation techniques', completed: true },
        { id: 2, title: 'Set up meditation space', completed: true },
        { id: 3, title: 'Practice for 7 consecutive days', completed: false },
        { id: 4, title: 'Increase to 15 minutes per session', completed: false },
        { id: 5, title: 'Practice for 30 consecutive days', completed: false },
      ],
    },
  ];
  
  const toggleGoalExpand = (goalId: number) => {
    setExpandedGoalId(expandedGoalId === goalId ? null : goalId);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Authentic Cycle Goals</h2>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-primary-700 transition-colors">
          <Plus size={18} className="mr-1" />
          Add Goal
        </button>
      </div>
      
      <div className="space-y-4">
        {goals.map(goal => (
          <div key={goal.id} className="border border-gray-200 rounded-xl overflow-hidden">
            {/* Goal header */}
            <div 
              className={`p-4 cursor-pointer ${
                expandedGoalId === goal.id ? 'bg-primary-50 border-b border-primary-100' : ''
              }`}
              onClick={() => toggleGoalExpand(goal.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">{goal.title}</h3>
                <button>
                  {expandedGoalId === goal.id ? (
                    <ChevronUp size={20} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-600" />
                  )}
                </button>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <span className="mr-3">Role: {goal.role}</span>
                <span>Domain: {goal.domain}</span>
              </div>
              
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-primary-600 h-1.5 rounded-full" 
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Expanded goal content */}
            {expandedGoalId === goal.id && (
              <div className="p-4 bg-white">
                <p className="text-gray-700 mb-4">{goal.description}</p>
                
                <h4 className="font-medium text-gray-700 mb-2">Key Tasks</h4>
                <div className="space-y-2 mb-4">
                  {goal.tasks.map(task => (
                    <div key={task.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={task.completed}
                        readOnly
                        className="mr-2 h-4 w-4 rounded text-primary-600 focus:ring-primary-500"
                      />
                      <span className={task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}>
                        {task.title}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end space-x-2">
                  <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded">
                    <Edit2 size={18} />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {goals.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No goals defined for this cycle yet.</p>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg">
            Add Your First Goal
          </button>
        </div>
      )}
    </div>
  );
};

export default GoalList;