const fetchWithDelay = async (url, delay = 1000) => {
  const [response] = await Promise.all([
    fetch(url),
    new Promise(resolve => setTimeout(resolve, delay))
  ]);
  return response;
};



export const fetchArticles = async (url) => {
    try {
      const proxyUrl = `/.netlify/functions/news-proxy?url=${encodeURIComponent(url)}`;
      const response = await fetchWithDelay(proxyUrl , 3000)
      console.log(response)
      if(!response.ok){
        throw new Error("I am sorry , Too many Requests in the last 24 hours")
      }
      return await response.json();;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };


