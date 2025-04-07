import { createContext, useState, useEffect } from "react";
import { fetchArticles } from "../services/fetchArticles";

const ApiContext = createContext();

export const ApiProvider = ({ children  , url}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchArticles(url);
        console.log("hello"+result)
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
    };
    fetchData();
  }, [url]); // Empty dependency array means this runs once on mount

  return (
    <ApiContext.Provider value={{ data, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
