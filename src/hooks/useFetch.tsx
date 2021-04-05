import { useState, useEffect, useCallback } from 'react';

interface Props {
  id: string;
  author: string;
  url: string;
  download_url: string;
}

const useFetch = (url: string, options = {}): Props[] => {
  const [data, setData] = useState([]);

  const fetchCallback = useCallback(async () => {
    const response = await fetch(url, options);

    setData(await response.json());
  }, [fetch]);

  useEffect(() => {
    fetchCallback();
  }, [fetchCallback]);

  return data;
};

export default useFetch;
