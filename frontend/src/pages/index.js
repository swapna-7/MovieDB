const API_KEY = "edef38af3394ef62d6c2066aca5b7b25";
 const  BASE_URL="https://api.themoviedb.org/3"


export const getTrendingMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTopratedMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/top_rated?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getPopularMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMoviesByGenre = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${id}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieVideosByID = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieSearchResults = async (type, query) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&include_adult=false&language=en-US&query=${query}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieDetailsByID = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getKollywoodMovies = async () => {
  try {
    // Replace 'type' with 'movie' to fetch movies instead of TV shows
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_original_language=ta&year=2024`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};
export const getTollywoodMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_original_language=te&year=2024`, 
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};
export const getBollywoodMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_original_language=hi&year=2024`, 
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};
export const getIndiasTrendingMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=-popularity.desc&primary_release_date.gte=2023-01-01&primary_release_date.lte=2024-12-31`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getCreditsMovies =async (type,id) => {
  try {
    const res = await fetch(`${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}&language=en-US`);
    if (!res.ok) {
      throw new Error(`HTTP error status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch credits:', error);
    return null; // Or handle the error as appropriate for your application
  }
};

export const getMoviesByLanguage = async (languageId) => {
  try { 
    let url = '';
    switch (languageId) {
      case 'ta':
        url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_original_language=ta&year=2024`;
        break;
      case 'hi':
        url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_original_language=hi&year=2024`;
        break;
      case 'te':
        url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_original_language=te&year=2024`;
        break;
      case 'ml':
        url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_original_language=ml&year=2024`;
        break;
      default:
        break;
    }

    const res = await fetch(url, {
      method: 'GET',
    });

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};