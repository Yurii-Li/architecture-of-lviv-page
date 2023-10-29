import Link from 'next/link';
import { Menu } from 'antd';

import { CategoriesEnum } from '@/enums/categories.enum';

export default function NavMenu() {
  return (
    <Menu
      mode="horizontal"
      style={{ background: 'transparent', border: 'none' }}
      items={[
        {
          key: '1',
          label: (
            <Link
              href={{
                pathname: `/architecture/${CategoriesEnum.TEMPLES}`,
                query: { page: 1 }
              }}
            >
              Храми
            </Link>
          )
        },
        {
          key: '2',
          label: (
            <Link
              href={{
                pathname: `/architecture/${CategoriesEnum.DEFENSE_STRUCTURES}`,
                query: { page: 1 }
              }}
            >
              Оборонні споруди
            </Link>
          )
        },
        {
          key: '3',
          label: (
            <Link
              href={{
                pathname: `/architecture/${CategoriesEnum.MUSEUMS}`,
                query: { page: 1 }
              }}
            >
              Музеї
            </Link>
          )
        },
        {
          key: '4',
          label: (
            <Link
              href={{
                pathname: `/architecture/${CategoriesEnum.MONUMENTS}`,
                query: { page: 1 }
              }}
            >
              Пам&lsquo;ятники
            </Link>
          )
        },
        {
          key: '5',
          label: (
            <Link
              href={{
                pathname: `/architecture/${CategoriesEnum.PARKS}`,
                query: { page: 1 }
              }}
            >
              Парки
            </Link>
          )
        }
      ]}
    />
  );
}
