export const fetchArticles = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=8f87dd79837644e7915357c55a095931');
      // const response = await fetch('https://api.mediastack.com/v1/news?access_key=953ea4b62d21a3ce825088ca14f69633&keywords=tennis&countries=us,gb,de');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };