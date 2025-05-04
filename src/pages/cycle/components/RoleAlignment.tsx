const RoleAlignment = () => {
  // Sample roles and their alignment scores
  const roles = [
    { id: 1, name: 'Self', score: 80 },
    { id: 2, name: 'Parent', score: 70 },
    { id: 3, name: 'Professional', score: 90 },
    { id: 4, name: 'Partner', score: 60 },
    { id: 5, name: 'Community Member', score: 40 },
    { id: 6, name: 'Financial Steward', score: 50 },
  ];
  
  // Function to determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Role Alignment</h2>
      
      <div className="space-y-4">
        {roles.map(role => (
          <div key={role.id} className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">{role.name}</span>
              <span className="text-gray-700 font-medium">{role.score}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${getScoreColor(role.score)}`}
                style={{ width: `${role.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-3 bg-primary-50 border border-primary-100 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-2">Pick Axe Insight:</h3>
        <p className="text-sm text-gray-600">
          Your "Community Member" role has the lowest alignment. Consider adding an Anchor Action related to this role in your weekly plan.
        </p>
      </div>
    </div>
  );
};

export default RoleAlignment;