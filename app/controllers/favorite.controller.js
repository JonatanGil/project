const usersModel = require('../models/users.model');
const apiMovies  = require('./movies.controller');

module.exports = {
    addFavorite,
    getFavoritesMovies,
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

async function getFavoritesMovies(req, res){

    const { _id } = req.cookies.user;
    const user = await usersModel.findById(_id);
    let favorites = user.favorite;
    favorites.forEach(movieFav => {
        console.log(movieFav);
        apiMovies.getMoviesDetail(movieFav);
    });

}

async function isFavMovie(idMovie, idUser) {
    const user = await usersModel.findById(idUser);
    let favorites = user.favorite;
    if(favorites.includes(idMovie)){return true}else{return false};
}
