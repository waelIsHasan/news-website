exports.handler = async function(event, context) {
  try {
    const { url } = event.queryStringParameters;
    
    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing URL parameter' })
      };
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
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: err.status || 500,
      body: JSON.stringify({ 
        error: err.message
      })
    };
  }
};