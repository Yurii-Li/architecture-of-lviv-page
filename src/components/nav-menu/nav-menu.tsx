import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

import { CategoriesEnum } from '@/enums/categories.enum';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import styles from './nav-menu.module.scss';

export default function NavMenu() {
  const { pathname, asPath } = useRouter();

  const isMainPage = pathname === '/' ? styles.navMenuComponentMainPage : '';

  const activeKey = asPath.split('?')[0];

  const isMobileOrTablet = useMediaQuery('(max-width: 768px)');

  return (
    <div className={styles.navMenu}>
      <Menu
        selectedKeys={[activeKey]}
        mode={isMobileOrTablet ? 'vertical' : 'horizontal'}
        className={`${styles.navMenuComponent} ${isMainPage}`}
        items={[
          {
            key: `/architecture/${CategoriesEnum.TEMPLES}`,
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
            key: `/architecture/${CategoriesEnum.DEFENSE_STRUCTURES}`,
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
            key: `/architecture/${CategoriesEnum.MUSEUMS}`,
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
            key: `/architecture/${CategoriesEnum.MONUMENTS}`,
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
            key: `/architecture/${CategoriesEnum.PARKS}`,
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
            key: `/architecture/${CategoriesEnum.THEATERS}`,
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
    </div>
  );
}
