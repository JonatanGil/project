const usersModel = require('../models/users.model');
const apiMovies  = require('./movies.controller');

module.exports = {
    home,
    get: async (req, res) => res.json(await usersModel.find({})),
}

async function home(req, res) {
    console.log("Home login OK");
    let movies = await apiMovies.getMovies();
    const { user } = req.cookies;
    res.render('home', { user, movies });
}