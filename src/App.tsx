import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AppShell from './components/layout/AppShell';
import SetupWizard from './pages/setup/SetupWizard';
import HomePage from './pages/home/HomePage';
import WeeklyPage from './pages/weekly/WeeklyPage';
import DailyPage from './pages/daily/DailyPage';
import CyclePage from './pages/cycle/CyclePage';
import ReflectionsPage from './pages/reflections/ReflectionsPage';
import BalancePage from './pages/balance/BalancePage';
import SettingsPage from './pages/settings/SettingsPage';
import WelcomeModal from './components/onboarding/WelcomeModal';

function App() {
  const [isSetupComplete, setIsSetupComplete] = useState<boolean>(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(true);

  const completeSetup = () => {
    setIsSetupComplete(true);
  };

  return (
    <>
      <div className="bg-primary-600 hidden"></div> {/* Force Tailwind to compile class */}
      <Router>
        {showWelcomeModal && !isSetupComplete && (
          <WelcomeModal onClose={() => setShowWelcomeModal(false)} />
        )}
        <Routes>
          {!isSetupComplete && (
            <Route path="/setup" element={<SetupWizard onComplete={completeSetup} />} />
          )}
          <Route element={<AppShell />}>
            <Route path="/" element={<Navigate to="/weekly" replace />} />
            <Route path="/weekly" element={<WeeklyPage isSetupComplete={isSetupComplete} />} />
            <Route path="/daily" element={<DailyPage />} />
            <Route path="/cycle" element={<CyclePage />} />
            <Route path="/reflections" element={<ReflectionsPage />} />
            <Route path="/balance" element={<BalancePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/weekly" replace />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;