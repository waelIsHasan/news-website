import { createContext, useState, useEffect } from "react";
import { fetchArticles } from "../services/fetchArticles";
import { fetchTechArticles } from "../services/fetchTechArticles.js";

const ApiContext = createContext();
const urlEverything =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=8f87dd79837644e7915357c55a095931";

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchArticles(urlEverything);
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
  }, []); // Empty dependency array means this runs once on mount

  return (
    <ApiContext.Provider value={{ data, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
