import Image from 'next/image';
import { Card } from 'antd';

import { IArchitectureCard } from '@/interfaces/architecture.interface';

import styles from './architecture-card.module.scss';

interface IProps {
  architecture: IArchitectureCard;
}

export default function ArchitectureCard({ architecture }: IProps) {
  return (
    <Card
      className={styles.architectureCard}
      hoverable
      cover={
        <div className={styles.architectureCardWrapper}>
          <Image
            priority
            src={architecture.main_image}
            alt={architecture.name}
            fill
            sizes="(min-width: 1200px) calc(25vw - 17px), (min-width: 780px) calc(33.25vw - 16px), (min-width: 580px) calc(50vw - 18px), calc(100vw - 20px)"
          />
        </div>
      }
    >
      <div>{architecture.name}</div>
    </Card>
  );
}
