import {articles_url, _api_key} from './../config';

/*
------Getting all the new's from API------
*/

export async function getArticles(countryCode) {
  try {
    let articles = await fetch(
      `${articles_url}?country=${countryCode}&category=general`,
      {
        headers: {
          'X-API-KEY': _api_key,
        },
      },
    );

    let result = await articles.json();
    articles = null;

    return result.articles;
  } catch (error) {
    throw error;
  }
}
