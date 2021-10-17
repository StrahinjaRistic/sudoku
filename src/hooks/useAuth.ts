import { useEffect, useState } from "react";

const useApi = () => {
  const [endpoint, setEndpoint] = useState();
  useEffect(() => {
    const ab = new AbortController();
    return () => ab.abort();
  }, []);
  return [endpoint];
}

export default useApi;