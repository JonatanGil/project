const fetch = require("node-fetch");

module.exports = {
    getMovies,
}
//https://developers.themoviedb.org/3/genres/get-movie-list

async function getMovies() {
    let movies = null;
    await fetch('https://api.themoviedb.org/3/search/movie?api_key=46abaa78d32cf1e540336f2225aeec23&language=es&query=A&page=1&include_adult=true')
        .then(function (response) { return response.json(); })
        .then(function (myJson) {
            movies = myJson.results;
            //results solo devuelve las peliculas- page total-pages no
        });
        return movies;
}