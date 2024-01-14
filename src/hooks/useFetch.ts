import { useState, useEffect } from "react";

function useFetch(url: string, options: object) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | unknown>(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error };
}

export default useFetch;
