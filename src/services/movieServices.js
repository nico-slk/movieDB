
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const MoviesService = {
    getPopularMovies: () => {
        return new Promise((resolve, reject) => {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
                .then((res) => res.json())
                .then((res) => resolve(res))
                .catch((error) => console.error(reject));
        });
    },

    searchMovie: (query) => {
        return new Promise((resolve, reject) => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
                .then((res) => res.json())
                .then((res) => resolve(res))
                .catch((error) => console.error(reject));
        });
    },

    getMovieDetail: (id) => {
        return new Promise((resolve, reject) => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
                .then((res) => res.json())
                .then((res) => resolve(res))
                .catch((error) => console.error(reject));
        });
    }
};