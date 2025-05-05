import { motion } from 'framer-motion';
import WeekSelector from './components/WeekSelector';
import AnchorActionsList from './components/AnchorActionsList';
import WeeklyCalendarView from './components/WeeklyCalendarView';
import WeeklySummary from './components/WeeklySummary';
import SetupPrompt from '../../components/shared/SetupPrompt';

interface WeeklyPageProps {
  isSetupComplete: boolean;
}

const WeeklyPage = ({ isSetupComplete }: WeeklyPageProps) => {
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!isSetupComplete && <SetupPrompt />}

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Authentic Weekly Connection</h1>
          <p className="text-sm text-gray-500 mt-1 italic max-w-xl">
            You have 168 hours - now is the time to invest in who you want to become!
          </p>
        </header>

        <WeekSelector />

        <div className="mt-8 flex flex-col lg:flex-row gap-6">
          {/* Fixed-width Anchor Actions panel */}
          <div className="lg:w-[320px] flex-shrink-0">
            <AnchorActionsList />
          </div>
          
          {/* Expandable Weekly Schedule */}
          <div className="flex-grow">
            <WeeklyCalendarView />
          </div>
        </div>

        <div className="mt-8">
          <WeeklySummary />
        </div>
      </motion.div>
    </div>
  );
};

export default WeeklyPage;