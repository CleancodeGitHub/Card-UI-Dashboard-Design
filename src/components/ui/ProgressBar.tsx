import { useEffect, useState } from 'react';

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    // Animate progress change
    const timer = setTimeout(() => {
      setCurrentProgress(progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className={`relative pt-1 ${className}`}>
      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
        <div 
          style={{ width: `${currentProgress}%`, transition: 'width 1s ease-in-out' }}
          className="animate-progress-fill shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        />
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {currentProgress}% Complete
      </span>
    </div>
  );
}