/* eslint-disable prettier/prettier */
import  { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.log(error);
      }
    }
  
  }, [url]);
  return (
  {data,error,loading}
  );
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
};

export default useFetch;
