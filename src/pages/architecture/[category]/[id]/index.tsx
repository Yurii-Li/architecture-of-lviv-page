import { GetServerSideProps } from 'next';

import { CategoriesEnum } from '@/enums/categories.enum';
import { prisma } from '@/lib/prisma';
import { architectural_landmarks } from '@prisma/client';

type Architecture = Omit<
  architectural_landmarks,
  'created_at' | 'updated_at' | 'category_id'
>;

interface IProps {
  data: Architecture;
}

export default function LandmarkPage({ data }: IProps) {
  return <div>{data.name}</div>;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id, category } = query as {
    id: string;
    category: CategoriesEnum;
  };

  const data = await prisma.architectural_landmarks.findUnique({
    where: {
      id: Number(id),
      category: {
        name: category
      }
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      description: true,
      images: true,
      location: true,
      date_of_foundation: true
    }
  });

  return {
    props: {
      data
    }
  };
};
