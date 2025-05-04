import { motion } from 'framer-motion';
import CycleProgress from './components/CycleProgress';
import GoalList from './components/GoalList';
import RoleAlignment from './components/RoleAlignment';

const CyclePage = () => {
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Authentic Cycle</h1>
          <p className="text-gray-600">Your 12-week journey to meaningful progress</p>
        </header>
        
        <CycleProgress />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <GoalList />
          </div>
          <div>
            <RoleAlignment />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CyclePage;