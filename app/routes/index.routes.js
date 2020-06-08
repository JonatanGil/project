const express = require('express');
const router  = express.Router(); 

const usersCtrl      = require('../controllers/users.controller');
const authCtrl       = require('../controllers/auth.controller');

// router.get('/register',  authCtrl.register);
router.get('/login',        authCtrl.login);
// router.post('/register', authCtrl.signUp);
router.post('/login',           authCtrl.signUp);
router.post('/register',        authCtrl.signUp);
router.get( '/logout',          authCtrl.logOut);

router.get('/home',             usersCtrl.homePage);
router.get('/home/:page',       usersCtrl.homePage);

router.get('/topMovies',        usersCtrl.topMovies);

router.get('/detail',          usersCtrl.detail);
router.get('/detail/:idMovie', usersCtrl.detail);

// router.get('/game',             authCtrl.isLoggedIn, usersCtrl.game);

router.get('/api',              authCtrl.isLoggedIn, usersCtrl.api);



// If the user is already logged in, it will redirect to home
// otherwise it will continue to the next routes
router.use((req, res, next) => {
    if (req.cookies.user) {
        console.log("cokkie down");
        return res.redirect('/home');
    }
    next();
});

module.exports = router;