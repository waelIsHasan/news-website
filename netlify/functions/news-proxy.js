exports.handler = async function(event, context) {
  try {
    const { url } = event.queryStringParameters;
    
    if (!url) {
      return JSON.stringify({ error: 'Missing URL parameter' })
    }

    const API_KEY = process.env.NEWSAPI_KEY;
    // Using fetch instead of axios
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`);
    }

    const data = await response.json();
    
    return data;
  } catch (err) {
    return JSON.stringify({ error: err.message })
    };
  
};