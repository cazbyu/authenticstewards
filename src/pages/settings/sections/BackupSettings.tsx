import { Download, Upload, FileText } from 'lucide-react';

const BackupSettings = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-6">Backup & Export</h3>
        
        <div className="space-y-6">
          {/* Download backup */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <Download size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">Download Backup</h4>
                <p className="text-sm text-gray-600">Save all your planning data as a backup file</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Download
              </button>
            </div>
          </div>
          
          {/* Restore backup */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <Upload size={20} className="text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">Restore Backup</h4>
                <p className="text-sm text-gray-600">Restore from a previously created backup file</p>
              </div>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                Restore
              </button>
            </div>
          </div>
          
          {/* Export as PDF */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="bg-red-100 rounded-full p-2 mr-3">
                <FileText size={20} className="text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">Export as PDF</h4>
                <p className="text-sm text-gray-600">Generate a PDF report of your planning data</p>
              </div>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">Data Privacy</h4>
        <p className="text-sm text-gray-600">
          Your data is stored locally on your device. Backups are not automatically synchronized 
          with any cloud service unless you've enabled specific integrations. We recommend 
          creating regular backups to prevent data loss.
        </p>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
          Delete All Data
        </button>
        <p className="text-xs text-gray-500 mt-2">
          This action cannot be undone. All your data will be permanently deleted.
        </p>
      </div>
    </div>
  );
};

export default BackupSettings;