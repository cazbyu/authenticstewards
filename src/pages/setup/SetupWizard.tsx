import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Step1Welcome from './steps/Step1Welcome';
import Step2Roles from './steps/Step2Roles';
import Step3WeeklyFocus from './steps/Step3WeeklyFocus';
import Step4Actions from './steps/Step4Actions';
import Step5Schedule from './steps/Step5Schedule';

interface SetupWizardProps {
  onComplete: () => void;
}

const SetupWizard = ({ onComplete }: SetupWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    roles: [],
    weeklyFocusRoles: [],
    anchorActions: {},
    actionSchedule: {},
  });

  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Welcome onNext={nextStep} />;
      case 2:
        return <Step2Roles onNext={nextStep} onBack={prevStep} userData={userData} updateUserData={updateUserData} />;
      case 3:
        return <Step3WeeklyFocus onNext={nextStep} onBack={prevStep} userData={userData} updateUserData={updateUserData} />;
      case 4:
        return <Step4Actions onNext={nextStep} onBack={prevStep} userData={userData} updateUserData={updateUserData} />;
      case 5:
        return <Step5Schedule onNext={nextStep} onBack={prevStep} userData={userData} updateUserData={updateUserData} />;
      default:
        return <Step1Welcome onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Authentic Planner</h1>
          <p className="text-gray-600">
            Live with intention. Show up with clarity. Reflect with grace.
          </p>
        </div>

        {/* Progress indicator with improved visibility */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <div className="w-full bg-gray-200 h-1"></div>
            <div 
              className="absolute h-1 bg-primary-600 transition-all duration-300"
              style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
            ></div>
          </div>
          <div className="relative flex justify-between">
            {[1, 2, 3, 4, 5].map((step) => (
              <div 
                key={step}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  ${step <= currentStep ? 'bg-primary-600' : 'bg-gray-200'}
                  ${step === currentStep ? 'ring-4 ring-primary-100' : ''}
                  transition-all duration-300
                `}
              >
                <span className={`text-sm font-medium ${step <= currentStep ? 'text-white' : 'text-gray-600'}`}>
                  {step < currentStep ? <CheckCircle size={16} /> : step}
                </span>
              </div>
            ))}
          </div>
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
      </div>
    </div>
  );
};

export default SetupWizard;