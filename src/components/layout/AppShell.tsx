import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import FloatingButton from '../dresser/FloatingButton';
import FloatingDresser from '../dresser/FloatingDresser';

const AppShell = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDresserOpen, setIsDresserOpen] = useState(false);

  const handleSidebarCollapse = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Desktop sidebar - hidden on mobile */}
      <div className="hidden md:flex">
        <Sidebar onCollapse={handleSidebarCollapse} />
      </div>

      {/* Main content area */}
      <main 
        className={`
          flex-1 pt-4 pb-20 md:pb-4 
          transition-all duration-300 ease
          ${isSidebarCollapsed ? 'md:pl-16' : 'md:pl-64'}
        `}
      >
        <div className={`
          container mx-auto px-4 
          transition-all duration-300 ease
          ${isSidebarCollapsed ? 'max-w-7xl' : 'max-w-4xl'}
        `}>
          <Outlet />
        </div>
      </main>

      {/* Mobile navigation - visible only on mobile */}
      <div className="md:hidden">
        <MobileNav />
      </div>

      {/* Floating Dresser */}
      <FloatingButton onClick={() => setIsDresserOpen(true)} />
      <FloatingDresser 
        isOpen={isDresserOpen}
        onClose={() => setIsDresserOpen(false)}
      />
    </div>
  );
};

export default AppShell;