import Link from 'next/link';
import { useRouter } from 'next/router';

import ArchitectureCard from '@/components/architecture-card/architecture-card';
import { IArchitectureCard } from '@/interfaces/architecture.interface';

interface IListProps {
  list: IArchitectureCard[];
}

export default function ArchitectureList({ list }: IListProps) {
  const { query } = useRouter();

  return (
    <div className="architecture-list">
      {list.map(item => (
        <Link
          key={item.id}
          href={{
            pathname: `/architecture/${query.category}/${item.id}`
          }}
        >
          <ArchitectureCard architecture={item} />
        </Link>
      ))}
    </div>
  );
}
