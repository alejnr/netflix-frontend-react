const API_KEY = '53b827ff1b65aee1099f12ceb7ed67d2'

const request = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTapRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, 
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`

}

export default request