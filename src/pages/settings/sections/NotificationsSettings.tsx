import { useState } from 'react';

const NotificationsSettings = () => {
  // Sample notification settings
  const [notifications, setNotifications] = useState({
    weeklyReview: true,
    dailyFocus: false,
    reflectionReminder: true,
  });
  
  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-6">Notification Preferences</h3>
        
        <div className="space-y-6">
          {/* Weekly Goal Review */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Weekly Goal Review</h4>
              <p className="text-sm text-gray-600">Receive a reminder to review your weekly progress</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.weeklyReview}
                onChange={() => toggleNotification('weeklyReview')}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          {/* Daily Focus Email */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Daily Focus Email</h4>
              <p className="text-sm text-gray-600">Get your daily priorities and schedule each morning</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.dailyFocus}
                onChange={() => toggleNotification('dailyFocus')}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
          
          {/* Reflection Reminder */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Reflection Reminder</h4>
              <p className="text-sm text-gray-600">Prompt to complete your daily reflection</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.reflectionReminder}
                onChange={() => toggleNotification('reflectionReminder')}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Notification Delivery</h3>
        <p className="text-sm text-gray-600 mb-3">How would you like to receive notifications?</p>
        
        <div className="space-y-2">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked 
              className="rounded text-primary-600 focus:ring-primary-500 mr-2"
            />
            <span className="text-gray-700">Email</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="rounded text-primary-600 focus:ring-primary-500 mr-2"
            />
            <span className="text-gray-700">Push notifications</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="rounded text-primary-600 focus:ring-primary-500 mr-2"
            />
            <span className="text-gray-700">SMS (text message)</span>
          </label>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NotificationsSettings;