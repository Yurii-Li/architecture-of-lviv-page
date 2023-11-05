import Link from 'next/link';
import { useRouter } from 'next/router';
import { Col, Row } from 'antd';

import ArchitectureCard from '@/components/architecture-card/architecture-card';
import { IArchitectureCard } from '@/interfaces/architecture.interface';

import styles from './architecture-list.module.scss';

interface IListProps {
  list: IArchitectureCard[];
}

export default function ArchitectureList({ list }: IListProps) {
  const { query } = useRouter();

  return (
    <Row gutter={[16, 16]} className={styles.architectureList}>
      {list.map(item => (
        <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={6}>
          <Link
            href={{
              pathname: `/architecture/${
                query.category || item.category.name
              }/${item.id}`
            }}
          >
            <ArchitectureCard architecture={item} />
          </Link>
        </Col>
      ))}
    </Row>
  );
}
