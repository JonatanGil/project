const usersModel = require('../models/users.model');
const commentModel = require('../models/comment.model');

module.exports = {
    addComment,
    delComment,
    getComments,
}

async function addComment(req, res) {

    const { idMovie, comment } = req.params;
    const { _id } = req.cookies.user;
    const user = await usersModel.findById(_id);
    const { name } = user;

    const nameUser = name;
    const idUser = _id;

    console.log("COMMENT--------------");
    console.log(idMovie + " / " + _id + " / " + comment + " / " + name);

    const commentNew = new commentModel({ idMovie, idUser, comment, nameUser });
    await commentNew.save({ idMovie, idUser, comment, nameUser });


}

async function delComment(req, res) {

    const { idMovie, score } = req.params;
    const { _id } = req.cookies.user;


}

async function getComments(req, res) {
    console.log("get commentarios");

    console.log(" req = >"+req);
    console.log(" res = >"+res);
    console.log(req);
    // const { idMovie } = req.params;
    let comments = await commentModel.find( {idMovie:req.params.idMovie} );
    // console.log(comments);
    console.log("get commentarios");
    
    res.json( comments );

}



// async function getComments(idMovie, _id) {
//     console.log("get commentarios");
//     let comment = [];
//     comment = await commentModel.find(
//         {
//             idMovie: idMovie,
//             idUser: _id
//         }
//      );


//     console.log(comment[0])
//     let comments = [];
//     for (let i = 0; i < comment.length; i++) {
//         comments.push(comment[i])
        
//      }
//      console.log(comments);
//     // console.log(comment);
     
//     return comments;

// }