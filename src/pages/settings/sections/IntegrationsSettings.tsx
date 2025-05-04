import { useState } from 'react';
import { ToggleLeft as Google, ArrowRightLeft } from 'lucide-react';

const IntegrationsSettings = () => {
  // Sample integration states
  const [googleCalendarSync, setGoogleCalendarSync] = useState<boolean>(false);
  const [notionSync, setNotionSync] = useState<boolean>(false);
  const [emailReports, setEmailReports] = useState<boolean>(false);
  
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-6">External Integrations</h3>
        
        {/* Google Calendar */}
        <div className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="bg-red-100 rounded-full p-2 mr-3">
                <Google size={20} className="text-red-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Google Calendar</h4>
                <p className="text-sm text-gray-600">Sync your daily schedule with Google Calendar</p>
              </div>
            </div>
            <div>
              {googleCalendarSync ? (
                <div className="flex items-center">
                  <span className="text-green-600 text-sm mr-3">Connected</span>
                  <button 
                    onClick={() => setGoogleCalendarSync(false)}
                    className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setGoogleCalendarSync(true)}
                  className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700"
                >
                  Connect
                </button>
              )}
            </div>
          </div>
          
          {googleCalendarSync && (
            <div className="bg-gray-50 p-3 rounded">
              <h5 className="font-medium text-gray-700 mb-2">Sync Options</h5>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked 
                    className="rounded text-primary-600 focus:ring-primary-500 mr-2"
                  />
                  <span className="text-sm text-gray-700">Import events to Daily Planner</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked 
                    className="rounded text-primary-600 focus:ring-primary-500 mr-2"
                  />
                  <span className="text-sm text-gray-700">Export Anchor Actions to calendar</span>
                </label>
              </div>
            </div>
          )}
        </div>
        
        {/* Notion */}
        <div className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-100 rounded-full p-2 mr-3">
                <ArrowRightLeft size={20} className="text-gray-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Notion</h4>
                <p className="text-sm text-gray-600">Sync your goals and tasks with Notion</p>
              </div>
            </div>
            <div>
              {notionSync ? (
                <div className="flex items-center">
                  <span className="text-green-600 text-sm mr-3">Connected</span>
                  <button 
                    onClick={() => setNotionSync(false)}
                    className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setNotionSync(true)}
                  className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700"
                >
                  Connect
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Email Reports */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Email Reports</h4>
                <p className="text-sm text-gray-600">Receive weekly progress summaries via email</p>
              </div>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={emailReports}
                  onChange={() => setEmailReports(!emailReports)}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
          
          {emailReports && (
            <div className="mt-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
              />
            </div>
          )}
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

export default IntegrationsSettings;