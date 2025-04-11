const fetchWithDelay = async (url, delay = 1000) => {
  const [response] = await Promise.all([
    fetch(url),
    new Promise(resolve => setTimeout(resolve, delay))
  ]);
  return response;
};



export const fetchArticles = async (url) => {
    try {

      // const urlProxy = `${url}`
      const proxyUrl = `/.netlify/functions/news-proxy?url=${encodeURIComponent(url)}`;

      const response = await fetchWithDelay(proxyUrl , 3000)
      console.log(response)
      return await response.json();;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };


