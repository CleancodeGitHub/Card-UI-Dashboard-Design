import { useState } from 'react';
import { TeamMember } from './ui/TeamMember';
import { AddMemberForm } from './team/AddMemberForm';
import { TeamMemberType } from '../types/team';
import { generateRandomAvatar } from '../utils/avatar';

const initialMembers: TeamMemberType[] = [
  {
    id: '1',
    name: 'Sarah Wilson',
    role: 'Lead Explorer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Navigator',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
];

export function TeamSection() {
  const [members, setMembers] = useState<TeamMemberType[]>(initialMembers);

  const addMember = ({ name, role }: Omit<TeamMemberType, 'id' | 'avatar'>) => {
    setMembers([...members, {
      id: Date.now().toString(),
      name,
      role,
      avatar: generateRandomAvatar(),
    }]);
  };

  const removeMember = (id: string) => {
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Team Members</h2>
      <div className="space-y-3">
        {members.map(member => (
          <TeamMember
            key={member.id}
            {...member}
            onRemove={() => removeMember(member.id)}
          />
        ))}
      </div>
      <AddMemberForm onAdd={addMember} />
    </div>
  );
}