import { useState, useEffect } from 'react';
import fetchCharacter from './useFecthCharacters';

const useCustomHook = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchCharacter(url); 
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading, error };
};

export default useCustomHook;
