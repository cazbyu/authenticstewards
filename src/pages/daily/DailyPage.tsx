import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DailyHeader from './components/DailyHeader';
import TaskList from './components/TaskList';
import DailyTimeBlocks from './components/DailyTimeBlocks';
import DailyReflection from './components/DailyReflection';
import QuoteBox from '../../components/shared/QuoteBox';

const DailyPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };
  
  const goToPreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };
  
  const goToNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };
  
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Daily Planner</h1>
          <p className="text-gray-600">Focus on what matters most today</p>
        </header>
        
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={goToPreviousDay}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <h2 className="text-xl font-semibold text-gray-800">
            {formatDate(currentDate)}
          </h2>
          
          <button 
            onClick={goToNextDay}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
        
        <QuoteBox 
          quote="The way to get started is to quit talking and begin doing." 
          author="Walt Disney"
        />
        
        <div className="mt-8">
          <DailyHeader date={currentDate} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-1">
            <TaskList />
          </div>
          <div className="lg:col-span-2">
            <DailyTimeBlocks />
          </div>
        </div>
        
        <div className="mt-8">
          <DailyReflection />
        </div>
      </motion.div>
    </div>
  );
};

export default DailyPage;