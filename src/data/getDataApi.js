const ENDPOINT = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const getDataFromApi = () => {
    return fetch(ENDPOINT)
        .then((response) => response.json())
};

export default getDataFromApi;