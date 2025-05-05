interface Domain {
  id: number;
  name: string;
  score: number;
  description: string;
}

interface DomainScoresProps {
  domains: Domain[];
}

const DomainScores = ({ domains }: DomainScoresProps) => {
  // Sort domains by score (highest to lowest)
  const sortedDomains = [...domains].sort((a, b) => b.score - a.score);
  
  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-primary-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Domain Scores</h2>
      
      <div className="space-y-3">
        {sortedDomains.map(domain => (
          <div key={domain.id} className="flex justify-between items-center">
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">{domain.name}</span>
                <span className={`font-medium ${getScoreColor(domain.score)}`}>
                  {domain.score}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="h-1.5 rounded-full bg-primary-600" 
                  style={{ width: `${domain.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Overall Balance</span>
          <span className="font-medium text-primary-600">68%</span>
        </div>
      </div>
    </div>
  );
};

export default DomainScores;