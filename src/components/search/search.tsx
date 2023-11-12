import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AutoComplete } from 'antd';

import useDebounce from '@/hooks/useDebounce';
import { IArchitecturalLandmarkSearchResult } from '@/interfaces/architecture.interface';

import styles from './search.module.scss';

export default function Search() {
  const [value, setValue] = useState('');
  const [architecturalLandmarks, setArchitecturalLandmarks] = useState<
    IArchitecturalLandmarkSearchResult[]
  >([]);
  const debouncedValue = useDebounce(value, 500);

  async function fetchData() {
    const res = await fetch(`/api/search?name=${value}`);
    const data = await res.json();
    setArchitecturalLandmarks(data);
  }

  useEffect(() => {
    if (debouncedValue) {
      fetchData();
    } else {
      setArchitecturalLandmarks([]);
    }
  }, [debouncedValue]);

  return (
    <AutoComplete
      className={styles.search}
      allowClear
      value={value}
      options={architecturalLandmarks.map(item => ({
        value: item.name,
        label: (
          <Link href={`/architecture/${item.category.name}/${item.id}`}>
            <div>{item.name}</div>
          </Link>
        )
      }))}
      onSearch={e => setValue(e)}
      placeholder="Пошук"
    />
  );
}
