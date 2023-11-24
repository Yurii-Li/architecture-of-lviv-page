import { useRouter } from 'next/router';
import { Button, Result } from 'antd';

import styles from '@/styles/pages-style/errorPage.module.scss';

export default function NotFoundPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div className={styles.errorPage}>
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
