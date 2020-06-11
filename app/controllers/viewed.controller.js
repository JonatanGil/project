
const fetch         = require("node-fetch");
const usersModel    = require('../models/users.model');
const favorites     = require('./favorite.controller');
const apiMovies     = require('./movies.controller');

module.exports = {
    viewedMovie,
    isViewMovie,
    getMoviesView
}

async function viewedMovie(req, res) {
    
    const { idMovie } = req.params;
    const { _id } = req.cookies.user;

    const user = await usersModel.findById(_id);
    let viewedMovies = user.viewedMovie;
    favorites.toggleArrayItem(viewedMovies, idMovie);
    
    console.log("ADDVIEWED");
    console.log("/idMovie:"+idMovie+" / user:"+user.name);
    console.log(user);
    await user.save();

    return null;

}

async function isViewMovie(idMovie, idUser) {
    const user = await usersModel.findById(idUser);
    let viewedMovies = user.viewedMovie;
    if(viewedMovies.includes(idMovie)){return true}else{return false};
}

async function getMoviesView(idUser){
    
    let moviesViews = [];
    const user = await usersModel.findById(idUser);
    let viewedMovies = user.viewedMovie;
    console.log(viewedMovies);
    await Promise.all(viewedMovies.map(async (idMovie) => {
        const mov = await apiMovies.getMoviesDetail(idMovie);
        moviesViews.push(mov);
      }));

    return moviesViews;

}