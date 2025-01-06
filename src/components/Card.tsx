import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ProgressBar } from './ui/ProgressBar';

interface CardProps {
  title: string;
  description: string;
  image: string;
  progress: number;
}

export function Card({ title, description, image, progress }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        
        <ProgressBar progress={progress} className="mb-4" />

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
        >
          <span>Learn more</span>
          <ChevronDown 
            className={`ml-1 w-4 h-4 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-48' : 'max-h-0'
          }`}
        >
          <p className="text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}