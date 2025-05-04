interface Domain {
  id: number;
  name: string;
  score: number;
  description: string;
}

interface DomainInsightsProps {
  domains: Domain[];
}

const DomainInsights = ({ domains }: DomainInsightsProps) => {
  // Find highest and lowest domains
  const sortedDomains = [...domains].sort((a, b) => b.score - a.score);
  const highestDomain = sortedDomains[0];
  const lowestDomain = sortedDomains[sortedDomains.length - 1];
  
  // Sample insights for each domain
  const domainInsights = {
    Physical: "Consider adding more consistent movement throughout your day.",
    Emotional: "Practice naming your emotions to build awareness.",
    Social: "Schedule meaningful connection time with loved ones.",
    Financial: "Create a specific plan for your next financial milestone.",
    Spiritual: "Your spiritual practices are creating a strong foundation.",
    Community: "Look for ways to contribute to your local community.",
    Recreation: "Schedule specific time for activities that bring joy.",
    Intellectual: "Set aside time for learning something new this week.",
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Domain Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 border border-green-100 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-2">Strength: {highestDomain.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{highestDomain.description}</p>
          <p className="text-sm text-gray-700">
            {domainInsights[highestDomain.name as keyof typeof domainInsights]}
          </p>
        </div>
        
        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-2">Growth Area: {lowestDomain.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{lowestDomain.description}</p>
          <p className="text-sm text-gray-700">
            {domainInsights[lowestDomain.name as keyof typeof domainInsights]}
          </p>
        </div>
      </div>
      
      <div className="bg-primary-50 border border-primary-100 rounded-lg p-4">
        <h3 className="font-medium text-gray-800 mb-2">Authentic AI Insight:</h3>
        <p className="text-gray-700">
          Your wheel shows strength in spiritual and intellectual domains, but 
          opportunity in recreation and community engagement. Consider how you might 
          integrate more play and community involvement into your daily rhythms.
        </p>
      </div>
    </div>
  );
};

export default DomainInsights;