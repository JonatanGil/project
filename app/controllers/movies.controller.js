const fetch = require("node-fetch");

module.exports = {
    getMoviesLatest,
    getMoviesVoteAverage,
    getMoviesDetail,
}
//https://developers.themoviedb.org/3/genres/get-movie-list
//https://api.themoviedb.org/3/discover/movie?api_key=46abaa78d32cf1e540336f2225aeec23&language=es&region=es&sort_by=release_date.desc&include_adult=false&include_video=false&page=1
//busqueda es query= A (peliculas que contenga A*) https://api.themoviedb.org/3/search/movie?api_key=46abaa78d32cf1e540336f2225aeec23&language=es&query=A&page=1
async function getMoviesLatest(page) {
    let movies = null;
    await fetch('https://api.themoviedb.org/3/discover/movie?api_key=46abaa78d32cf1e540336f2225aeec23&language=es&region=es&sort_by=release_date.desc&include_adult=false&include_video=false&page='+page)
        .then(function (response) { return response.json(); })
        .then(function (myJson) {
            movies = myJson;
            //results solo devuelve las peliculas- page total-pages no
        });
        return movies;
}

async function getMoviesVoteAverage() {
    let movies = null;
    await fetch('https://api.themoviedb.org/3/discover/movie?api_key=46abaa78d32cf1e540336f2225aeec23&language=es&region=es&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1')
    .then(function (response) { return response.json(); })
    .then(function (myJson) {
        movies = myJson;
    });
    return movies;
}

async function getMoviesDetail(id){
    let movie = null;
    console.log("hola");
    await fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=46abaa78d32cf1e540336f2225aeec23&language=es')
    .then(function (response) { return response.json(); })
    .then(function (myJson) {
        movie = myJson;
        console.log("MOVIEWWWWWWWWWWWWWWWWWWWWWWW DETAIL");
        console.log(myJson);
        console.log(myJson.id);
    });
    return movie;
}