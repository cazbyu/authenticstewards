import { motion } from 'framer-motion';
import BalanceWheel from './components/BalanceWheel';
import DomainScores from './components/DomainScores';
import DomainInsights from './components/DomainInsights';

const BalancePage = () => {
  // Sample domains data with corrected domain names
  const domains = [
    { id: 1, name: 'Physical', score: 70, description: 'Health, energy, vitality' },
    { id: 2, name: 'Emotional', score: 65, description: 'Self-awareness, resilience, expression' },
    { id: 3, name: 'Social', score: 75, description: 'Relationships, connection, belonging' },
    { id: 4, name: 'Financial', score: 60, description: 'Resources, stewardship, security' },
    { id: 5, name: 'Spiritual', score: 85, description: 'Purpose, meaning, values' },
    { id: 6, name: 'Community', score: 55, description: 'Service, impact, contribution' },
    { id: 7, name: 'Recreation', score: 45, description: 'Play, joy, refreshment' },
    { id: 8, name: 'Intellectual', score: 80, description: 'Learning, growth, creativity' },
  ];
  
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Life Balance Wheel</h1>
          <p className="text-gray-600">Track your progress across all life domains</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Balance wheel visualization */}
          <div className="lg:col-span-2">
            <BalanceWheel domains={domains} />
          </div>
          
          {/* Domain scores */}
          <div>
            <DomainScores domains={domains} />
          </div>
        </div>
        
        <div className="mt-8">
          <DomainInsights domains={domains} />
        </div>
      </motion.div>
    </div>
  );
};

export default BalancePage;