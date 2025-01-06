import { ChangeEvent } from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function Input({ placeholder, value, onChange, className = '' }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white ${className}`}
    />
  );
}