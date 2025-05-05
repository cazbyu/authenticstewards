import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal = ({ onClose }: WelcomeModalProps) => {
  const navigate = useNavigate();

  const handleBeginSetup = () => {
    navigate('/setup');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to Authentic Planner
          </h2>
          <p className="text-gray-600">
            You're here to invest in what matters. Let's help you define your roles and rhythms.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleBeginSetup}
            className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Begin Setup
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Explore First
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;