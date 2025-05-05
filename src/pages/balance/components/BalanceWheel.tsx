interface Domain {
  id: number;
  name: string;
  score: number;
  description: string;
}

interface BalanceWheelProps {
  domains: Domain[];
}

const BalanceWheel = ({ domains }: BalanceWheelProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Authentic Balance Wheel</h2>
      
      <div className="flex justify-center mb-8">
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          {/* Base circle */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
          
          {/* 25% circle */}
          <div className="absolute inset-0 rounded-full border border-gray-100 m-[25%]"></div>
          
          {/* 50% circle */}
          <div className="absolute inset-0 rounded-full border border-gray-100 m-[50%]"></div>
          
          {/* 75% circle */}
          <div className="absolute inset-0 rounded-full border border-gray-100 m-[75%]"></div>
          
          {/* Domain segments */}
          {domains.map((domain, index) => {
            // Calculate position based on index
            const angle = (index / domains.length) * 2 * Math.PI;
            const labelRadius = 125; // distance from center for labels
            
            // Position labels around circle
            const labelX = Math.sin(angle) * labelRadius;
            const labelY = -Math.cos(angle) * labelRadius;
            
            // Score indicator (simplified)
            const scoreRadius = (domain.score / 100) * 140; // scaled by score percentage
            const scoreX = Math.sin(angle) * scoreRadius;
            const scoreY = -Math.cos(angle) * scoreRadius;
            
            return (
              <div key={domain.id}>
                {/* Domain label */}
                <div 
                  className="absolute text-xs font-medium text-gray-700"
                  style={{ 
                    left: 'calc(50% + ' + labelX + 'px)', 
                    top: 'calc(50% + ' + labelY + 'px)',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {domain.name}
                </div>
                
                {/* Score indicator */}
                <div 
                  className="absolute w-4 h-4 rounded-full bg-primary-600"
                  style={{ 
                    left: 'calc(50% + ' + scoreX + 'px)', 
                    top: 'calc(50% + ' + scoreY + 'px)',
                    transform: 'translate(-50%, -50%)'
                  }}
                ></div>
              </div>
            );
          })}
          
          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-sm text-center p-2">
              <span className="text-sm font-medium text-primary-700">Start with Your Why</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-600">
        <p>Last updated: April 15, 2025</p>
      </div>
    </div>
  );
};

export default BalanceWheel;