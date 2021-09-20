const API_URL = "https://api.punkapi.com/v2/beers";

export const fetchPunkBeers = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse
    })
    .catch((err) => {
      console.error(err);
    });
};