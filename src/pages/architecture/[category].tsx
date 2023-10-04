import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Pagination } from 'antd';

import ArchitectureList from '@/components/architecture-list/architecture-list';
import { CategoriesEnum } from '@/enums/categories.enum';
import { IArchitectureCard } from '@/interfaces/architecture.interface';
import { PrismaClient } from '@prisma/client';

interface IProps {
  count: number;
  data: IArchitectureCard[];
}

export default function CategoryPage({ count, data }: IProps) {
  // Отримати query параметри
  const { query, push } = useRouter();

  const currentPage = Number(query.page) || 1;

  return (
    <>
      <ArchitectureList list={data} />
      <Pagination
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page, category } = query as {
    page: string;
    category: CategoriesEnum;
  };

  const prisma = new PrismaClient();

  if (!Object.values(CategoriesEnum).includes(category)) {
    return {
      notFound: true
    };
  }

  const [count, data] = await prisma.$transaction([
    // @ts-ignore
    prisma[category].count(),
    // @ts-ignore
    prisma[category].findMany({
      select: {
        id: true,
        name: true,
        main_image: true
      },
      take: 20,
      skip: (Number(page) - 1) * 20
    })
  ]);

  return {
    props: {
      count,
      data
    }
  };
};
