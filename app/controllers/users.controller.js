const usersModel     = require('../models/users.model');
const apiMovies      = require('./movies.controller');
const paginationCtrl = require('../controllers/pagination.controller');

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

async function homePage(req ,res){
    console.log(req.query);
    let page;
    if(req.query.page==undefined){page=parseInt(1)}else{page = parseInt(req.query.page)}
    console.log("Home login OK");
    let movies = await apiMovies.getMoviesLatest(page);
    let paginationText = await paginationCtrl.getPaginations(page, movies.total_pages);
    movies = movies.results;
    const { user } = req.cookies;
    console.log(user);
    res.render('home', { user, movies, paginationText });
}

async function topMovies(req, res) {
    console.log("topMovies login OK");
    let movies = await apiMovies.getMoviesVoteAverage();
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

async function detail(req, res){
    let idMovie;
    console.log(req.query);
    const { user } = req.cookies;
    if(!req.query.idMovie){idMovie = 0}else{idMovie = req.query.idMovie;}
    console.log("detail OK  id:"+idMovie);
    let movie = await apiMovies.getMoviesDetail(idMovie);
    res.render('detailMovie', { user, movie });
}