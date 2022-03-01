import { useEffect, useState } from "react";

function useGetAPI <T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (url !== "undefined" || typeof url !== "undefined" || url !== null || url !== "") {
      if(!url.includes("undefined") ){
        fetch(url)
        .then((response) => response.json())
        .catch((err) => setData(err))
        .then((data) => {
          setData(data);
        })
        .finally(() => setIsFetching(false));
      }else{
        setData(null);
      }

    } else {
      setData(null);
    }
  }, [url]);

  return { data, isFetching };
};

export default useGetAPI;
