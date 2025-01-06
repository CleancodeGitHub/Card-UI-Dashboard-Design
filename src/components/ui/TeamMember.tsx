import { X } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  avatar: string;
  onRemove: () => void;
}

export function TeamMember({ name, role, avatar, onRemove }: TeamMemberProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="flex items-center space-x-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        aria-label="Remove team member"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
}