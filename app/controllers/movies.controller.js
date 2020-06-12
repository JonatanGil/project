const fetch         = require("node-fetch");
const usersModel    = require('../models/users.model');
const favorites     = require('./favorite.controller');

module.exports = {
    getMoviesLatest,
    getMoviesVoteAverage,
    getMoviesDetail,
    getMoviesSearch,
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
    await fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=46abaa78d32cf1e540336f2225aeec23&language=es')
    .then(function (response) { return response.json(); })
    .then(function (myJson) {
        
        console.log("IDmovie movie.controller :"+myJson.id);
        movie = myJson;
    });
    return movie;
}

async function getMoviesSearch(titulo, page){

    let res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=46abaa78d32cf1e540336f2225aeec23&language=en-US&query=' + titulo + '&include_adult=false&region=es&page='+page);
    let moviesOk = await res.json();

    return moviesOk;
    
}


// async function getNamesGenres(myJson){

//     let generos;
//     let optionsGeneros = "";

//     let resultado  = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=46abaa78d32cf1e540336f2225aeec23&language=es');
//     generos = await resultado.json();
//     generos = generos.genres;
//     console.log(generos);

//         for (let i = 0; i < generos.length; i++) {
//             if(generos[i] == idGenre){
//                 optionsGeneros+=generos[i].name;
//                 console.log(name);
//             }
//         }
//     return optionsGeneros;

// }
