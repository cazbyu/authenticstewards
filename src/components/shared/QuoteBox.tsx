interface QuoteBoxProps {
  quote: string;
  author: string;
}

const QuoteBox = ({ quote, author }: QuoteBoxProps) => {
  return (
    <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 text-center animate-fade-in">
      <p className="text-lg italic text-gray-700 mb-2">"{quote}"</p>
      <p className="text-sm text-gray-600">— {author}</p>
    </div>
  );
};

export default QuoteBox;