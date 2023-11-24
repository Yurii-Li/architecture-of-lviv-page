import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Pagination } from 'antd';

import ArchitectureList from '@/components/architecture-list/architecture-list';
import { CategoriesEnum } from '@/enums/categories.enum';
import { isValidCategory } from '@/helpers/validate-сategory';
import { IArchitectureCard } from '@/interfaces/architecture.interface';
import { prisma } from '@/lib/prisma';

import styles from '@/styles/pages-style/category.module.scss';

interface IProps {
  count: number;
  data: IArchitectureCard[];
}

export default function CategoryPage({ count, data }: IProps) {
  const { query, push } = useRouter();

  const currentPage = Number(query.page) || 1;

  return (
    <>
      <Head>
        <title>Архітектурні пам&apos;ятки Львова - Travel to Lviv</title>
        <meta
          name="description"
          content="Огляд архітектурних пам'яток міста Львова. Перегляньте найвидатніші архітектурні шедеври з Travel to Lviv."
        />
      </Head>
      <ArchitectureList list={data} />
      {count > 20 && (
        <Pagination
          className={styles.pagination}
          onChange={page => {
            push({
              pathname: `/architecture/${query.category}`,
              query: { page }
            });
          }}
          defaultPageSize={20}
          current={currentPage}
          total={count}
        />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page, category } = query as {
    page: string;
    category: CategoriesEnum;
  };

  if (!isValidCategory(category)) {
    return {
      notFound: true
    };
  }

  const [count, data] = await prisma.$transaction([
    prisma.architectural_landmarks.count({
      where: {
        category: {
          name: category
        }
      }
    }),
    prisma.architectural_landmarks.findMany({
      where: {
        category: {
          name: category
        }
      },
      select: {
        id: true,
        name: true,
        main_image: true,
        category: {
          select: {
            name: true
          }
        }
      },
      take: 20,
      skip: (Number(page) - 1) * 20 || 0
    })
  ]);

  return {
    props: {
      count,
      data
    }
  };
};
