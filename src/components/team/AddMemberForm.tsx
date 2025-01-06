import { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { TeamMemberType } from '../../types/team';

interface AddMemberFormProps {
  onAdd: (member: Omit<TeamMemberType, 'id' | 'avatar'>) => void;
}

export function AddMemberForm({ onAdd }: AddMemberFormProps) {
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
  });

  const handleSubmit = () => {
    if (newMember.name && newMember.role) {
      onAdd(newMember);
      setNewMember({ name: '', role: '' });
    }
  };

  return (
    <div className="mt-4 flex space-x-2">
      <Input
        placeholder="Name"
        value={newMember.name}
        onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        className="flex-1"
      />
      <Input
        placeholder="Role"
        value={newMember.role}
        onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
        className="flex-1"
      />
      <Button onClick={handleSubmit}>
        <UserPlus className="w-4 h-4 mr-2" />
        Add
      </Button>
    </div>
  );
}