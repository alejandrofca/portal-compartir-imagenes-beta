const path = require('path');
const morgan = require('morgan');
const express = require('express');
const errorHandler = require('errorhandler');
const multer = require('multer');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');

Handlebars.registerHelper('toJSON', obj => {
    return JSON.stringify(obj, null, 3);
})

const routes = require('../routes');

module.exports = app => {
    // Settings
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        helpers: require('./helpers'),
        extname: '.hbs',
    }));

    app.set('view engine', '.hbs');
    app.use(multer({ dest: path.join(__dirname, '../public/upload/tmp') }).single('image'));

    // middlewares
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Routes
    routes(app);

    // Static files
    app.use('/public', express.static(path.join(__dirname, '../public')));

    // Error Handling
    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }

    return app;
}