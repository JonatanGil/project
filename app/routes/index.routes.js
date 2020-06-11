const express = require('express');
const router  = express.Router(); 

const usersCtrl          = require('../controllers/usersViews.controller');
const authCtrl           = require('../controllers/auth.controller');
const favoriteCtrl       = require('../controllers/favorite.controller');
const movieCtrl          = require('../controllers/movies.controller');
const voteCtrl           = require('../controllers/vote.controller');
const viewCtrl           = require('../controllers/viewed.controller');

router.get('/login',                authCtrl.login);
router.post('/login',               authCtrl.signUp);
router.post('/register',            authCtrl.signUp);
router.get( '/logout',              authCtrl.logOut);

router.get('/profile',              authCtrl.isLoggedIn, usersCtrl.profile);

router.get('/settings',              authCtrl.isLoggedIn, usersCtrl.settings);

router.get('/',                     usersCtrl.homePage);
router.get('/home',                 usersCtrl.homePage);
router.get('/home/:page',           usersCtrl.homePage);

router.get('/topMovies',            usersCtrl.topMovies);

router.get('/detail',               usersCtrl.detail);
router.get('/detail/:idMovie',      usersCtrl.detail);

router.post('/view/:idMovie',                   authCtrl.isLoggedIn, favoriteCtrl.addFavorite);
router.post('/view/favorites/:idMovie',         authCtrl.isLoggedIn, favoriteCtrl.addFavorite);
router.post('/view/viewedMovie/:idMovie',       authCtrl.isLoggedIn, viewCtrl.viewedMovie);
router.post('/view/movieScore/:idMovie/:score', authCtrl.isLoggedIn, voteCtrl.vote);

router.get('/api',                              authCtrl.isLoggedIn, usersCtrl.api);


// router.get('/game',             authCtrl.isLoggedIn, usersCtrl.game);

router.use((req, res, next) => {
    if (req.cookies.user) {
        return res.redirect('/home');
    }
    next();
});

module.exports = router;