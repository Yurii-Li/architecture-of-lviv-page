import Image from 'next/image';
import { Card } from 'antd';

import { IArchitectureCard } from '@/interfaces/architecture.interface';

interface IProps {
  architecture: IArchitectureCard;
}

export default function ArchitectureCard({ architecture }: IProps) {
  return (
    <Card
      hoverable
      className="card__item"
      cover={
        <Image
          src={architecture.main_image}
          alt={architecture.name}
          width={350}
          height={250}
        />
      }
    >
      <div>{architecture.name}</div>
    </Card>
  );
}
