export const fetchTechArticles = async () => {
    try {  
      
      const [response] = await Promise.all([
        await fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=8f87dd79837644e7915357c55a095931'),
        new Promise(resolve => setTimeout(resolve, 1000))
      ]);
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error
    }
  };
