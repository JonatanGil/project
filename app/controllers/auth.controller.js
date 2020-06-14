const usersModel = require('../models/users.model');
// const validator = require('validator');

const ONE_DAY = 60000 * 60 * 24;
const OPTS_COOKIE = {
    expire: ONE_DAY,
    secure: false,
    httpOnly: true
}

module.exports = {
    signUp,
    signIn,
    logOut,
    isLoggedIn,
    login: (req, res) => res.render('login'),
}
// register: (req, res) => res.render('login'),

async function signUp(req, res) {
    console.log(req.body);
    const { name, password, email, loginRegister } = req.body;

    if (loginRegister == 'Register') {

        const emailDuplicate = await usersModel.find({ email });
        const userDuplicate = await usersModel.find({ name });
        let fieldsEmptys = '';

        if (!name)     { fieldsEmptys += '-Nombre' };
        if (!password) { fieldsEmptys += '-Contraseña' }
        if (!email)    { fieldsEmptys += '-Email' }
        if (!name || !password || !email) {
            return res.render('register', { msg: 'Campos vacíos en registro:' + fieldsEmptys });
        }

        console.log("EmailDuplicado length  0==No a encontrado email creaCuenta  1== A encontrado email en mongose no crea " + emailDuplicate.length);
        let msg="";
        if (emailDuplicate.length === 1) { msg += 'El correo esta en  uso';};
        if (userDuplicate.length === 1) { msg +=' / El usuario ya esta en uso'};
        if(emailDuplicate.length === 1 || userDuplicate.length === 1){return res.render('register', { msg });}

        const user = new usersModel({ name, password, email });

        await user.save({ name, password, email });
        res.render('login', { accountCreated: 'Cuenta creada' });

    } else {
        signIn(req, res);
    }
}

async function signIn(req, res) {
    const { name, password } = req.body;
    let fieldsEmptys = 'Campos vacíos en login:';
    if(!name)     { fieldsEmptys += "-Nombre" }
    if(!password) { fieldsEmptys += "-contraseña" }
    if(!name || !password) { return res.render('login', { msg: fieldsEmptys }); }
    let msg = '';
    const user = await usersModel.findOne({ name });

    if (!user) {
        msg = 'El usuario no existe...';
    }
    else if (password === user.password) {
        console.log("Cookie START");
        user.password="";
        user.image="";
        res.cookie('user', user, OPTS_COOKIE);
        console.log(res.user);
        return res.redirect('/');
    }
    else {
        msg = `La contraseña no coincide!`;
    }

    res.render('login', { msg });
}

function logOut(req, res) {
    res.clearCookie('user');
    res.redirect('/login');
}

function isLoggedIn(req, res, next) {
    console.log(req.cookies.user);
    if (!req.cookies.user) {
        return res.redirect('/login');
    }
    next();
}