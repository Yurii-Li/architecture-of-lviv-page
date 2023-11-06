import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

import { CategoriesEnum } from '@/enums/categories.enum';

import styles from './nav-menu.module.scss';

export default function NavMenu() {
  const { pathname } = useRouter();

  const mainPage = pathname === '/' ? styles.navMenu : '';

  return (
    <Menu
      mode="horizontal"
      style={{ borderBottom: 'none', background: 'none' }}
      className={mainPage}
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
        },
        {
          key: '6',
          label: (
            <Link
              href={{
                pathname: `/architecture/${CategoriesEnum.THEATERS}`,
                query: { page: 1 }
              }}
            >
              Театри
            </Link>
          )
        }
      ]}
    />
  );
}
