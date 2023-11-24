import { useRouter } from 'next/router';
import { Button, Result, Space } from 'antd';

import styles from '@/styles/pages-style/errorPage.module.scss';

export default function ServerErrorPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  const handleReload = () => {
    router.reload();
  };

  return (
    <div className={styles.errorPage}>
      <Result
        status="500"
        title="500"
        subTitle="Вибачте, сталася помилка на сервері."
        extra={
          <Space>
            <Button type="primary" onClick={handleRedirect}>
              На Головну
            </Button>
            <Button type="primary" onClick={handleReload}>
              Перезавантажити
            </Button>
          </Space>
        }
      />
    </div>
  );
}
