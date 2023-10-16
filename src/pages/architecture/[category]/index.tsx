import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Pagination } from 'antd';

import ArchitectureList from '@/components/architecture-list/architecture-list';
import { CategoriesEnum } from '@/enums/categories.enum';
import { IArchitectureCard } from '@/interfaces/architecture.interface';
import ArchitectureLayout from '@/layouts/architecture-layout/architecture-layout';
import MainLayout from '@/layouts/main-layout/main-layout';
import { prisma } from '@/lib/prisma';

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

CategoryPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <MainLayout>
      <ArchitectureLayout>{page}</ArchitectureLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page, category } = query as {
    page: string;
    category: CategoriesEnum;
  };

  if (!Object.values(CategoriesEnum).includes(category)) {
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
