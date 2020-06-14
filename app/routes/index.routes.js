const express            = require('express');
const router             = express.Router(); 

const usersCtrl          = require('../controllers/usersViews.controller');
const authCtrl           = require('../controllers/auth.controller');
const favoriteCtrl       = require('../controllers/favorite.controller');
const voteCtrl           = require('../controllers/vote.controller');
const viewCtrl           = require('../controllers/viewed.controller');
const commentCtrl        = require('../controllers/comment.controller');

router.get('/login',                              authCtrl.login);
router.post('/login',                             authCtrl.signUp);
router.get( '/logout',                            authCtrl.logOut);
router.post('/register',                          authCtrl.signUp);

router.get('/profile',                            authCtrl.isLoggedIn, usersCtrl.profile);
router.get('/profile/Base64',                     authCtrl.isLoggedIn, usersCtrl.getBase64IMG);
 
router.get('/settings',                           authCtrl.isLoggedIn, usersCtrl.settings);
router.post('/settings/save/profile',             authCtrl.isLoggedIn, usersCtrl.settings);

router.get('/',                                   usersCtrl.homePage);
router.get('/home',                               usersCtrl.homePage);
router.get('/home/:page',                         usersCtrl.homePage);

router.get('/topMovies',                          usersCtrl.topMovies);
router.get('/topMovies/:page',                    usersCtrl.topMovies);

router.get('/detail',                             usersCtrl.detail);
router.get('/detail/:idMovie',                    usersCtrl.detail);
router.get('/details/comments/:idMovie',          commentCtrl.getComments);
router.post('/detail/comment/:idMovie/:comment',  authCtrl.isLoggedIn, commentCtrl.addComment);
router.post('/detail/comment/:idMovie/:comment',  authCtrl.isLoggedIn, commentCtrl.delComment);

router.post('/view/:idMovie',                     authCtrl.isLoggedIn, favoriteCtrl.addFavorite);
router.post('/view/favorites/:idMovie',           authCtrl.isLoggedIn, favoriteCtrl.addFavorite);
router.post('/view/viewedMovie/:idMovie',         authCtrl.isLoggedIn, viewCtrl.viewedMovie);
router.post('/view/movieScore/:idMovie/:score',   authCtrl.isLoggedIn, voteCtrl.vote);

router.get('/api',                                authCtrl.isLoggedIn, usersCtrl.api);

router.get('/search',                             usersCtrl.search);
router.get('/search/:query/:page',                usersCtrl.search);

module.exports = router;