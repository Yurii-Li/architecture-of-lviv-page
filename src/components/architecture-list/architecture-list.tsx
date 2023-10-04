import ArchitectureCard from '@/components/architecture-card/architecture-card';
import { IArchitectureCard } from '@/interfaces/architecture.interface';

interface IListProps {
  list: IArchitectureCard[];
}

export default function ArchitectureList({ list }: IListProps) {
  return (
    <div className="architecture-list">
      {list.map(item => (
        <ArchitectureCard architecture={item} key={item.id} />
      ))}
    </div>
  );
}
