const fetch      = require("node-fetch");
const usersModel = require('../models/users.model');
const apiMovies  = require('./movies.controller');

module.exports = {
    addFavorite,
    getMoviesFavs,
    isFavMovie,
    toggleArrayItem
}

async function addFavorite(req, res) {

    const { idMovie } = req.params;
    const { _id } = req.cookies.user;
    
    const user = await usersModel.findById(_id);
    let favorites = user.favorite;
    toggleArrayItem(favorites, idMovie);
    
    console.log("ADDFAVORITE");
    console.log("idMovie:"+idMovie+" / user:"+user.name);
    console.log( user);
    await user.save();

}

function toggleArrayItem(array, value) {
    var i = array.indexOf(value);
    if (i === -1)
        array.push(value);
    else
        array.splice(i, 1);
        
}

async function isFavMovie(idMovie, idUser) {
    const user = await usersModel.findById(idUser);
    let favorites = user.favorite;
    if(favorites.includes(idMovie)){return true}else{return false};
}


async function getMoviesFavs(idUser){

    let moviesFavs = [];
    const user = await usersModel.findById(idUser);
    let favorites = user.favorite;
    console.log(favorites);
    await Promise.all(favorites.map(async (idMovie) => {
        const mov = await getMoviesDetail(idMovie);
        moviesFavs.push(mov);
      }));

    return moviesFavs;

}

async function getMoviesDetail(id){
    let movie = null;
    await fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=46abaa78d32cf1e540336f2225aeec23&language=es')
    .then(function (response) { return response.json(); })
    .then(function (myJson) {
        movie = myJson;
        console.log(myJson.title);
        console.log("IDmovie movie.controller :"+myJson.id);
    });
    return movie;
}
