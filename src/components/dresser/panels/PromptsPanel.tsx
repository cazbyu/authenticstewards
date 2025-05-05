import { promptBank } from '../../../data/promptBank';

const PromptsPanel = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-800">Prompt Bank</h3>
      <p className="text-sm text-gray-600">
        Find inspiration for meaningful deposits in each role
      </p>
      <div className="space-y-4">
        {Object.entries(promptBank).map(([role, prompts]) => (
          <div key={role} className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-700 mb-2">{role}</h4>
            <div className="space-y-2">
              {prompts.map(prompt => (
                <div key={prompt.id} className="text-sm text-gray-600">
                  • {prompt.prompt}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptsPanel;