import { createContext, useState, useEffect } from 'react';
import { fetchArticles } from '../services/fetchArticles';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
              const result = await fetchArticles();
              setData(result['articles']);
            } catch (err) {
              setError(err.message);
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