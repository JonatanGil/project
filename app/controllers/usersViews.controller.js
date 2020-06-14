const usersModel = require('../models/users.model');
const moviesCtrl = require('./movies.controller');
const favoriteCtrl = require('./favorite.controller');
const paginationCtrl = require('./pagination.controller');
const voteCtrl = require('./vote.controller');
const viewCtrl = require('./viewed.controller');
const commentCtrl = require('../controllers/comment.controller');
const settingsCtrl = require('../controllers/settings.controller');


module.exports = {
    homePage,
    topMovies,
    game,
    api,
    profile,
    settings,
    detail,
    search,
    getBase64IMG,
    getBase64IMGtext,
    get: async (req, res) => res.json(await usersModel.find({})),
}

async function getBase64IMG(req, res){
    
    console.log("get base64img");
    const { user } = req.cookies;

    let userBase = await usersModel.findById(user._id);
    // console.log(userBase.image);
    base64 = userBase.image;
    console.log("get base64");
    
    res.json( base64 );
}


async function getBase64IMGtext(_id){
    
    console.log("get base64imgtext");

    let userBase = await usersModel.findById(_id);
    // console.log(userBase.image);
    base64 = userBase.image;
    console.log("get base64");

    return base64;
}



async function settings(req, res) {
    console.log("settings login OK");
    const { user } = req.cookies;

    if (req.body.name != undefined) {
        const { base64, name, _id, pwdActual, pwdNueva } = req.body;
        user.createdAt = user.createdAt.substring(0, 10);
        settingsCtrl.saveSettings(base64, name, _id, pwdActual, pwdNueva);
        
        res.render('settings', { user });
    } else {
        console.log("no guarda");
        user.createdAt = user.createdAt.substring(0, 10);
        res.render('settings', { user });
    }
}


async function search(req, res) {
    console.log("search login OK");
    console.log(req.query);
    const { query } = req.query;
    console.log("query:" + query);
    if (query != undefined) {
        let cadena = query.split("/");
        let titulo = cadena[0];
        let page = cadena[1];
        console.log(titulo + "/" + page);

        let movies = await moviesCtrl.getMoviesSearch(titulo, page);
        let paginationText = await paginationCtrl.getPaginationsSearch(page, movies.total_pages, titulo);
        movies = movies.results;

        const { user } = req.cookies;
        res.render('search', { user, paginationText, movies });
    } else {
        console.log("Search");
        const { user } = req.cookies;
        console.log(user);
        if (req.query.page == undefined) { page = parseInt(1) } else { page = parseInt(req.query.page) }
        let movies = await moviesCtrl.getMoviesLatest(page);
        let paginationText = await paginationCtrl.getPaginationTopMoviesNoSearch(page, movies.total_pages);
        movies = movies.results;
        res.render('search', { user, paginationText, movies });

    }

}

async function homePage(req, res) {
    let page;
    if (req.query.page == undefined) { page = parseInt(1) } else { page = parseInt(req.query.page) }
    console.log("Home login OK");
    const { user } = req.cookies;
    console.log(user);
    let movies = await moviesCtrl.getMoviesLatest(page);
    let paginationText = await paginationCtrl.getPaginations(page, movies.total_pages);
    movies = movies.results;
    let base64 = undefined;
    if(user !=undefined){let base64 = getBase64IMGtext(user._id);}
    
    // console.log(movies);
    res.render('home', { user, movies, paginationText, base64 });
}

async function topMovies(req, res) {
    console.log("topMovies login OK");
    console.log(req.query);
    if (req.query.page == undefined) { page = parseInt(1) } else { page = parseInt(req.query.page) }
    let movies = await moviesCtrl.getMoviesVoteAverage(page);
    let paginationText = await paginationCtrl.getPaginationTopMovies(page, movies.total_pages);
    movies = movies.results;
    const { user } = req.cookies;
    // console.log(movies);
    console.log(paginationText);
    res.render('topMovies', { user, movies, paginationText });
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
    const idUser = user._id;
    let moviesFav = await favoriteCtrl.getMoviesFavs(idUser);
    let moviesView = await viewCtrl.getMoviesView(idUser);
    console.log(moviesFav);
    console.log("movies FAVSSSSSSSSSSSSSSSSSS");
    res.render('profile', { user, moviesFav, moviesView });
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
        let isFav = false; let isView = false; let isVote = false;

        res.render('detailMovie', { user, movie, isFav, isView, isVote });
    } else {
        if (!req.query.idMovie) { idMovie = 0 } else { idMovie = req.query.idMovie; }
        // console.log("detail OK  id:"+idMovie);
        let movie = await moviesCtrl.getMoviesDetail(idMovie);
        let isFav = await favoriteCtrl.isFavMovie(idMovie, user._id);
        let isView = await viewCtrl.isViewMovie(idMovie, user._id);
        let isVote = await voteCtrl.isVote(idMovie, user._id);
        // console.log("/////fav: "+isFav+"//////isvIEW"+isView+"///////isvote:"+isVote + "//n \n" + comments);
        // console.log("comment" + comments);
        // console.log("movie" + movie);
        console.log("---------------------------");
        // console.log(movie);

        res.render('detailMovie', { user, movie, isFav, isView, isVote });
    }
}