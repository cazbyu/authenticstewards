import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, CheckCircle } from 'lucide-react';
import Step1SelfRole from './steps/Step1SelfRole';
import Step2Roles from './steps/Step2Roles';
import Step3Preferences from './steps/Step3Preferences';
import Step4Confirm from './steps/Step4Confirm';

interface SetupWizardProps {
  onComplete: () => void;
}

const SetupWizard = ({ onComplete }: SetupWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    selfImage: '',
    missionStatement: '',
    roles: [],
    startDay: 'Monday',
    language: 'English',
    rhythmPreference: 'Morning',
  });

  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete setup
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Render different step components based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1SelfRole userData={userData} updateUserData={updateUserData} />;
      case 2:
        return <Step2Roles userData={userData} updateUserData={updateUserData} />;
      case 3:
        return <Step3Preferences userData={userData} updateUserData={updateUserData} />;
      case 4:
        return <Step4Confirm userData={userData} />;
      default:
        return <Step1SelfRole userData={userData} updateUserData={updateUserData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 mx-4"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Authentic Planner</h1>
          <p className="text-gray-600">
            Live by who you are. Show up with clarity. Reflect with grace.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="relative mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step < currentStep ? <CheckCircle size={16} /> : step}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 h-1 absolute top-4 z-0 -mt-1"></div>
          <div 
            className="bg-primary-600 h-1 absolute top-4 z-0 transition-all duration-300 -mt-1"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
        </div>

        {/* Step content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 ? (
            <button
              onClick={prevStep}
              className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div> // Empty div to maintain layout
          )}
          
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            {currentStep === 4 ? 'Complete Setup' : 'Next'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SetupWizard;