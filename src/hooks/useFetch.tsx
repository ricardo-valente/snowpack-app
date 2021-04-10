import { useState, useEffect, useCallback } from 'react';

const useFetch = (page = 1): string[] => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );

      setData(await response.json());
    } catch {
      throw new Error();
    }
  }, [page]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default useFetch;
