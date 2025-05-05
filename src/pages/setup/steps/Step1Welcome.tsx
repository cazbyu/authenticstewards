import { motion } from 'framer-motion';
import { BookHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Step1Props {
  onNext: () => void;
}

const Step1Welcome = ({ onNext }: Step1Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center"
    >
      <Link 
        to="/weekly" 
        className="block text-center text-sm text-gray-400 hover:text-gray-600 mb-6"
      >
        Return to Planner
      </Link>

      <div className="mb-8">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary-100 rounded-full">
            <BookHeart size={32} className="text-primary-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to Your Authentic Journey
        </h2>
        <p className="text-gray-600">
          Authentic Planner helps you live intentionally by focusing on the roles that matter most to you.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div className="p-4 bg-primary-50 rounded-lg text-left">
          <h3 className="font-medium text-gray-800 mb-2">What to Expect</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Define your important life roles</li>
            <li>• Set weekly focus areas</li>
            <li>• Create meaningful anchor actions</li>
            <li>• Establish your planning rhythm</li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg text-left">
          <h3 className="font-medium text-gray-800 mb-2">This Will Take</h3>
          <p className="text-gray-600">About 5 minutes to complete the initial setup</p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        Let's Begin
      </button>
    </motion.div>
  );
};

export default Step1Welcome;