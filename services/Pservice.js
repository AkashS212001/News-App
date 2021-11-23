export async function Pservice(category="Politics") {
  
    const response = await fetch("https://bing-news-search1.p.rapidapi.com/news?category=Politics&cc=IN&setLang=en&safeSearch=Off&textFormat=Raw", {
        "method": "GET",
        "headers": {
        "accept-language": "EN",
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "8e10a7ebc8mshd67f48ba0815b34p11f94bjsn0ce8b2314fc0"
        }
    })
  const body = await response.json();
  return body.value;
  }