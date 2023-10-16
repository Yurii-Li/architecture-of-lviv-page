import Link from 'next/link';
import { useRouter } from 'next/router';

import ArchitectureCard from '@/components/architecture-card/architecture-card';
import { IArchitectureCard } from '@/interfaces/architecture.interface';

import styles from './architecture-list.module.scss';

interface IListProps {
  list: IArchitectureCard[];
}

export default function ArchitectureList({ list }: IListProps) {
  const { query } = useRouter();

  return (
    <div className={styles.architectureList}>
      {list.map(item => (
        <Link
          key={item.id}
          href={{
            pathname: `/architecture/${query.category || item.category.name}/${
              item.id
            }`
          }}
        >
          <ArchitectureCard architecture={item} />
        </Link>
      ))}
    </div>
  );
}
