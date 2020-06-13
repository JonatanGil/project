const express    = require('express');
const cookies    = require('cookie-parser');
const path       = require('path');
const handlebars = require('express-handlebars');
const mongoose   = require('mongoose');
const app        = express();

const PORT = process.env.PORT || 5000;

(async function initApp() {
    
    // To transfer data with client, this way client can send a whole form
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({limit:"1gb"}));

    app.use(require('morgan')('tiny')); // logger middlewar0

    initCookies();
    initTemplatesEngine();
    await initDb();
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.use('/', require('./app/routes/index.routes.js'));
    
    const PORT = process.env.PORT || 3000; app.listen(PORT, () => { console.log(`App listening on port ${PORT}!`); });
})();

function initCookies() {
    app.use(cookies());
}

async function initDb() {
    try {
        const { url }       = require('./config/db');    
        const DB_PROPERTIES = { useNewUrlParser: true, useUnifiedTopology: true };
        await mongoose.set('useCreateIndex', true);
        await mongoose.connect(url, DB_PROPERTIES);
        console.log('Db started!');
    }
    catch (error) {
        throw new Error(error);
    }
}

function initTemplatesEngine() {
    // To render pages from the server side
    app.engine('.hbs', handlebars({
        extname: '.hbs',
        defaultLayout: '',
    }));
    app.set('view engine', '.hbs');
    app.set('views', path.join(__dirname, 'views'));
    console.log('Templates engine started!');
}