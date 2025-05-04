import { useState } from 'react';
import { Check, Circle, Plus, Star, StarOff, X } from 'lucide-react';

const TaskList = () => {
  // Sample tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete project proposal', priority: true, completed: false },
    { id: 2, title: 'Call healthcare provider', priority: false, completed: false },
    { id: 3, title: 'Review quarterly goals', priority: true, completed: true },
    { id: 4, title: 'Prepare for team meeting', priority: false, completed: false },
    { id: 5, title: 'Schedule dentist appointment', priority: false, completed: false },
  ]);
  
  const [newTask, setNewTask] = useState('');
  
  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map(task => 
        task.id === id 
          ? { ...task, completed: !task.completed } 
          : task
      )
    );
  };
  
  const togglePriority = (id: number) => {
    setTasks(
      tasks.map(task => 
        task.id === id 
          ? { ...task, priority: !task.priority } 
          : task
      )
    );
  };
  
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          priority: false,
          completed: false,
        },
      ]);
      setNewTask('');
    }
  };
  
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-medium text-gray-800 mb-4">Today's Tasks</h3>
      
      <div className="mb-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button
          onClick={addTask}
          className="bg-primary-600 text-white px-4 rounded-r-lg hover:bg-primary-700"
        >
          <Plus size={20} />
        </button>
      </div>
      
      <div className="space-y-2">
        {tasks.map(task => (
          <div 
            key={task.id}
            className={`p-3 border rounded-lg flex items-center group ${
              task.completed 
                ? 'bg-gray-50 border-gray-200' 
                : task.priority 
                  ? 'bg-primary-50 border-primary-100' 
                  : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <button 
              onClick={() => toggleComplete(task.id)}
              className={`mr-3 ${
                task.completed 
                  ? 'text-primary-600' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {task.completed ? <Check size={18} /> : <Circle size={18} />}
            </button>
            
            <p className={`flex-1 ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
              {task.title}
            </p>
            
            <button 
              onClick={() => togglePriority(task.id)}
              className="text-gray-400 hover:text-yellow-500 mx-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {task.priority ? <Star size={18} className="text-yellow-500" /> : <StarOff size={18} />}
            </button>
            
            <button 
              onClick={() => deleteTask(task.id)}
              className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;