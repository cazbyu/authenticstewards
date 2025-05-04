import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AppShell from './components/layout/AppShell';
import SetupWizard from './pages/setup/SetupWizard';
import WeeklyPage from './pages/weekly/WeeklyPage';
import DailyPage from './pages/daily/DailyPage';
import CyclePage from './pages/cycle/CyclePage';
import ReflectionsPage from './pages/reflections/ReflectionsPage';
import BalancePage from './pages/balance/BalancePage';
import SettingsPage from './pages/settings/SettingsPage';

function App() {
  // Simple state to track if user has completed setup
  // In a real app, this would come from localStorage or a backend
  const [isSetupComplete, setIsSetupComplete] = useState<boolean>(false);

  const completeSetup = () => {
    setIsSetupComplete(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/setup" element={<SetupWizard onComplete={completeSetup} />} />
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
  );
}

export default App;