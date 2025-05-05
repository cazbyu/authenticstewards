import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, BookOpen, Book } from 'lucide-react';
import DailyReflectionList from './components/DailyReflectionList';
import WeeklyReflectionList from './components/WeeklyReflectionList';

const ReflectionsPage = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly'>('daily');
  
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reflections</h1>
          <p className="text-gray-600">Review your journey and insights</p>
        </header>
        
        {/* Tab navigation */}
        <div className="bg-white rounded-xl shadow-sm p-2 mb-6">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab('daily')}
              className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'daily' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <Book size={18} className="mr-2" />
              Daily Reflections
            </button>
            <button
              onClick={() => setActiveTab('weekly')}
              className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'weekly' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <BookOpen size={18} className="mr-2" />
              Weekly Reflections
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <div className="mb-6">
          {activeTab === 'daily' ? <DailyReflectionList /> : <WeeklyReflectionList />}
        </div>
        
        {/* Quote about reflection */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <p className="text-lg italic text-gray-700 mb-2">
            "We do not learn from experience... we learn from reflecting on experience."
          </p>
          <p className="text-sm text-gray-600">— John Dewey</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ReflectionsPage;