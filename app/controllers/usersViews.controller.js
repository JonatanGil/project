const usersModel     = require('../models/users.model');
const moviesCtrl     = require('./movies.controller');
const favorite       = require('./favorite.controller');
const paginationCtrl = require('./pagination.controller');
const voteCtrl       = require('./vote.controller');

module.exports = {
    homePage,
    topMovies,
    game,
    api,
    profile,
    settings,
    detail,
    get: async (req, res) => res.json(await usersModel.find({})),
}

async function homePage(req, res) {
    console.log(req.query);
    let page;
    if (req.query.page == undefined) { page = parseInt(1) } else { page = parseInt(req.query.page) }
    console.log("Home login OK");
    let movies = await moviesCtrl.getMoviesLatest(page);
    let paginationText = await paginationCtrl.getPaginations(page, movies.total_pages);
    movies = movies.results;
    const { user } = req.cookies;
    res.render('home', { user, movies, paginationText });
}

async function topMovies(req, res) {
    console.log("topMovies login OK");
    let movies = await moviesCtrl.getMoviesVoteAverage();
    const { user } = req.cookies;
    res.render('topMovies', { user, movies });
}

async function game(req, res) {
    console.log("game login OK");
    const { user } = req.cookies;
    res.render('game', { user });
}

async function api(req, res) {
    console.log("api login OK");
    const { user } = req.cookies;
    res.render('api', { user });
}

async function profile(req, res) {
    console.log("profile login OK");
    const { user } = req.cookies;
    res.render('profile', { user });
}

async function settings(req, res) {
    console.log("settings login OK");
    const { user } = req.cookies;
    res.render('settings', { user });
}

async function detail(req, res) {
    let idMovie;
    if (!req.query.idMovie) { idMovie = 0 } else { idMovie = req.query.idMovie; }
    console.log("DETAIL movie");
    
    let { user } = req.cookies;
    console.log(user);
    if (!req.cookies.user) {
        user = null;
        let movie = await moviesCtrl.getMoviesDetail(idMovie);
        let isFav = false;let isView = false;let isVote = false;

        res.render('detailMovie', { user, movie, isFav, isView, isVote });
    } else {
        if (!req.query.idMovie) { idMovie = 0 } else { idMovie = req.query.idMovie; }
        // console.log("detail OK  id:"+idMovie);
        let movie = await moviesCtrl.getMoviesDetail(idMovie);
        let isFav = await favorite.isFavMovie(idMovie, user._id);
        let isView = await moviesCtrl.isViewMovie(idMovie, user._id);
        let isVote = await voteCtrl.isVote(idMovie, user._id);
        console.log("/////fav: "+isFav+"//////isvIEW"+isView+"///////isvote:"+isVote);
        
        res.render('detailMovie', { user, movie, isFav, isView, isVote });
    }
}

function profile(req, res) {
    const { user } = req.cookies;
    res.render('profile', { user });
}