import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import QuoteBox from '../../components/shared/QuoteBox';
import WeeklyPreview from './components/WeeklyPreview';
import ProgressSummary from './components/ProgressSummary';
import SetupPrompt from '../../components/shared/SetupPrompt';

interface HomePageProps {
  isSetupComplete: boolean;
}

const HomePage = ({ isSetupComplete }: HomePageProps) => {
  // Current date
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  
  // For demo purposes
  const nextAuthenticDeposits = [
    { id: 1, title: 'Weekly family dinner', role: 'Parent', completed: false },
    { id: 2, title: 'Team retrospective', role: 'Professional', completed: false },
    { id: 3, title: '30-minute meditation', role: 'Self', completed: true },
  ];

  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!isSetupComplete && <SetupPrompt />}

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">{formattedDate}</p>
        </header>

        <QuoteBox 
          quote="Begin each day as if it were on purpose." 
          author="Mary Anne Radmacher"
        />

        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Today's Authentic Deposits</h2>
            <a href="/daily" className="text-primary-600 flex items-center hover:text-primary-700">
              View all <ArrowRight size={16} className="ml-1" />
            </a>
          </div>

          <div className="space-y-3">
            {nextAuthenticDeposits.map(action => (
              <div 
                key={action.id}
                className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center"
              >
                <div className={`p-2 rounded-full mr-3 ${action.completed ? 'bg-green-100' : 'bg-primary-100'}`}>
                  {action.completed ? (
                    <CheckCircle2 size={20} className="text-green-600" />
                  ) : (
                    <Calendar size={20} className="text-primary-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{action.title}</h3>
                  <p className="text-sm text-gray-500">Role: {action.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Overview</h2>
          <WeeklyPreview />
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Authentic Cycle Progress</h2>
          <ProgressSummary />
        </section>
      </motion.div>
    </div>
  );
};

export default HomePage;