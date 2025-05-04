import { NavLink } from 'react-router-dom';
import { 
  Calendar, CalendarDays, Target, BookHeart, 
  PieChart 
} from 'lucide-react';

const MobileNav = () => {
  const navItems = [
    { to: '/weekly', icon: <Calendar size={20} />, label: 'Weekly' },
    { to: '/daily', icon: <CalendarDays size={20} />, label: 'Daily' },
    { to: '/cycle', icon: <Target size={20} />, label: 'Cycle' },
    { to: '/reflections', icon: <BookHeart size={20} />, label: 'Reflect' },
    { to: '/balance', icon: <PieChart size={20} />, label: 'Balance' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-10">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center px-2 py-1 ${
                isActive ? 'text-primary-600' : 'text-gray-600'
              }`
            }
          >
            <div>{item.icon}</div>
            <span className="text-xs mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;