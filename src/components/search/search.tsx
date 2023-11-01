import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AutoComplete } from 'antd';

import useDebounce from '@/hooks/useDebounce';
import { IArchitecturalLandmarkSearchResult } from '@/interfaces/architecture.interface';

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
      allowClear
      value={value}
      style={{ width: '25%' }}
      options={architecturalLandmarks.map(item => ({
        value: item.name,
        label: (
          <Link href={`/architecture/${item.category.name}/${item.id}`}>
            {item.name}
          </Link>
        )
      }))}
      onSearch={e => setValue(e)}
      placeholder="Пошук"
    />
  );
}
