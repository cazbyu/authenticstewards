import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

const AppShell = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Desktop sidebar - hidden on mobile */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Main content area */}
      <main className="flex-1 pt-4 pb-20 md:pb-4 md:pl-64 transition-all duration-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <Outlet />
        </div>
      </main>

      {/* Mobile navigation - visible only on mobile */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default AppShell;