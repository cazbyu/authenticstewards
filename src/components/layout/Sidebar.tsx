import { NavLink } from 'react-router-dom';
import { 
  Calendar, CalendarDays, Target, BookHeart, 
  PieChart, Settings, Menu, X 
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar = ({ onCollapse }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    onCollapse(!collapsed);
  };

  const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `flex items-center p-3 mb-2 rounded-xl transition-all duration-200 ${
          isActive 
            ? 'bg-primary-100 text-primary-700' 
            : 'hover:bg-gray-100 text-gray-700 hover:text-primary-600'
        }`
      }
    >
      <div className="flex items-center">
        <span className="mr-3">{icon}</span>
        {!collapsed && <span className="font-medium">{label}</span>}
      </div>
    </NavLink>
  );

  return (
    <aside 
      className={`fixed top-0 left-0 h-full bg-white shadow-md z-10 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center">
            <BookHeart className="h-6 w-6 text-primary-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-800">Authentic Planner</h1>
          </div>
        )}
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      <div className="p-4">
        <NavItem to="/weekly" icon={<Calendar size={20} />} label="Weekly Connection" />
        <NavItem to="/daily" icon={<CalendarDays size={20} />} label="Daily Planner" />
        <NavItem to="/cycle" icon={<Target size={20} />} label="Authentic Cycle" />
        <NavItem to="/reflections" icon={<BookHeart size={20} />} label="Reflections" />
        <NavItem to="/balance" icon={<PieChart size={20} />} label="Balance Wheel" />
        <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
      </div>
    </aside>
  );
};

export default Sidebar;