import Image from 'next/image';
import { Card } from 'antd';

interface IProps {
  name: string;
  main_image: string;
}

export default function CardItem({ name, main_image }: IProps) {
  return (
    <Card
      hoverable
      cover={<Image src={main_image} alt={name} width={250} height={250} />}
    >
      <div>{name}</div>
    </Card>
  );
}
