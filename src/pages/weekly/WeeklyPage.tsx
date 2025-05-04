import { motion } from 'framer-motion';
import WeekSelector from './components/WeekSelector';
import AnchorActionsList from './components/AnchorActionsList';
import WeeklyCalendarView from './components/WeeklyCalendarView';
import WeeklySummary from './components/WeeklySummary';
import SetupPrompt from '../../components/shared/SetupPrompt';
import QuoteBox from '../../components/shared/QuoteBox';

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
          <p className="text-gray-600">Plan your week with intention and purpose</p>
        </header>

        <QuoteBox 
          quote="Begin each day as if it were on purpose." 
          author="Mary Anne Radmacher"
        />

        <WeekSelector />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <WeeklyCalendarView />
          </div>
          <div>
            <AnchorActionsList />
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