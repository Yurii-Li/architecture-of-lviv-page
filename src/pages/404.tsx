import { useRouter } from 'next/router';
import { Button, Result } from 'antd';

import styles from '@/styles/pages-style/404.module.scss';

export default function NotFoundPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div className={styles.notFoundPage}>
      <Result
        status="404"
        title="404"
        subTitle="Вибачте, такої сторінки не існує."
        extra={
          <Button type="primary" onClick={handleRedirect}>
            На Головну
          </Button>
        }
      />
    </div>
  );
}
