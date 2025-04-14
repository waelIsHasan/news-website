import { createContext, useState, useEffect, useCallback } from "react";
import { fetchArticles } from "../services/fetchArticles";

const ApiContext = createContext();

export const ApiProvider = ({ children, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [curUrl, setCurUrl] = useState(url);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchArticles(curUrl);
      setData(result["articles"]);
    } catch (error) {
      let message = error.message;
      if (error instanceof TypeError) {
        message = "Network error - please check your connection";
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [curUrl]); // Dependency array includes url

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Now depends on fetchData which is memoized

  // The refresh function that will be exposed to consumers
  const refresh = () => {
    fetchData();
  };

  const updateCurUrl = (newUrl) => {
    setCurUrl(newUrl);
  };

  return (
    <ApiContext.Provider
      value={{ data, loading, error, curUrl, updateCurUrl, refresh }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
