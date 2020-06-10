const usersModel = require('../models/users.model');

module.exports = {
    isVote,
    vote,
}


async function isVote(idMovie2, idUser) {
    const user = await usersModel.findById(idUser);
    let scores = user.scores;
    console.log(scores[0].idMovie);
    for (let i = 0; i < scores.length; i++) {
        if (scores[i].idMovie == idMovie2) { return true };
    }
    return false;
}

async function vote(req, res) {

    const { idMovie, score } = req.params;
    const { _id } = req.cookies.user;

    const user = await usersModel.findById(_id);
    let scores = user.scores;
    let scoreObj = {
        idMovie: idMovie,
        score: score,
    }
    scores.push(scoreObj);
    console.log("ADDscore");
    console.log(scoreObj);
    console.log("idMovie:" + idMovie + " / user:" + score);
    console.log("////////////////");
    console.log(user);
    await user.save();

}
