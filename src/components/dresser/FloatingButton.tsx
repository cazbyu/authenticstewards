import { Archive } from 'lucide-react';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton = ({ onClick }: FloatingButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-4 md:bottom-8 md:right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-40"
      title="Open Your Authentic Dresser"
    >
      <Archive size={24} />
    </button>
  );
};

export default FloatingButton;