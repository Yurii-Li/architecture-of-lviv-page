import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Card, Carousel } from 'antd';

import { CategoriesEnum } from '@/enums/categories.enum';
import { isValidCategory } from '@/helpers/validate-сategory';
import { prisma } from '@/lib/prisma';
import { architectural_landmarks } from '@prisma/client';

import styles from './landmark.module.scss';

type Architecture = Omit<
  architectural_landmarks,
  'created_at' | 'updated_at' | 'category_id'
>;

interface IProps {
  data: Architecture;
}

export default function LandmarkPage({ data }: IProps) {
  return (
    <>
      <Head>
        <title>{data.name} - Travel to Lviv</title>
        <meta
          name="description"
          content={`Детальна інформація про ${data.name} у Львові. Дізнайтеся про історію, архітектуру та унікальні елементи цієї архітектурної пам'ятки.`}
        />
      </Head>
      <div className={styles.landmarkPage}>
        <h1 className={styles.title}>{data.name}</h1>
        <div className={styles.dateOfFoundation}>
          Дата заснування: {data.date_of_foundation}
        </div>
        <Carousel className={styles.carousel} autoplay>
          {data.images.map(image => (
            <div key={data.id} className={styles.carouselImageWrapper}>
              <Image
                priority
                src={image}
                alt={data.name}
                className={styles.carouselImage}
                fill
              />
            </div>
          ))}
        </Carousel>
        <div>
          <h2 className={styles.subTittle}>
            Загальна інформація про {data.name}
          </h2>
          <Card>
            <p className={styles.description}>{data.description}</p>
          </Card>
        </div>
        {data.online_tour_link && (
          <div>
            <h2 className={styles.subTittle}>3D Тур</h2>
            <iframe
              className={styles.iframeStyles}
              title={data.name}
              src={data.online_tour_link}
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}
        {data.google_maps_link && (
          <div>
            <h2 className={styles.subTittle}>Місцезнаходження</h2>
            <iframe
              className={styles.iframeStyles}
              title={data.name}
              src={data.google_maps_link}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const { id, category } = context.params as {
    id: string;
    category: CategoriesEnum;
  };

  if (!isValidCategory(category) || !id) {
    return {
      notFound: true
    };
  }

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
      date_of_foundation: true,
      google_maps_link: true,
      online_tour_link: true
    }
  });

  return {
    props: {
      data
    },
    revalidate: 60 * 60 * 24
  };
};

export const getStaticPaths = async () => {
  const data = await prisma.architectural_landmarks.findMany({
    select: {
      id: true,
      name: true,
      category: {
        select: {
          name: true
        }
      }
    }
  });

  const paths = data.map(({ id, category }) => ({
    params: {
      id: id.toString(),
      category: category.name
    }
  }));

  return {
    paths,
    fallback: false
  };
};
