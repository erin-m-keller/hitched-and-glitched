export const searchUnsplash = (query) => {
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=100`;
  const apiKey = process.env.REACT_APP_UNSPLASH_KEY;
  
  const options = {
    headers: {
      'Authorization': `Client-ID ${apiKey}`
    }
  };

  return fetch(url, options)
    .then(response => response.json())
    .catch(error => console.error(error));
};