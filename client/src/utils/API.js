export const searchPinterest = async (pin) => {
  const url = `https://pinterest-pin-search.p.rapidapi.com/?r=${pin}=cat&offset=0`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '630e21b445mshbf69da114dbdfebp1cd9cfjsn5ea34ce3cbc1',
      'X-RapidAPI-Host': 'pinterest-pin-search.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
};