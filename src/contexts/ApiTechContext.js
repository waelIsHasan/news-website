import { createContext, useState, useEffect } from 'react';
 import { fetchTechArticles } from '../services/fetchTechArticles.js';

const ApiTechContext = createContext();

export const ApiTechProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
              const result = await fetchTechArticles();
            
              setData(result['articles']);
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
      <ApiTechContext.Provider value={{ data, loading, error }}>
        {children}
      </ApiTechContext.Provider>
    );
  };
  
  export default ApiTechContext;