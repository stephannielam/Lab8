var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Added for Lab 11
//var passport = require('passport');
//var LocalStrategy = require('passport-local');
var session = require('express-session');

var routes = require('./routes/index');
var user = require('./routes/users');
var schooluser = require('./routes/school_routes');

// -------------------------------------------------
var account = require('./routes/account_routes');
var school = require('./routes/school_routes');
var GPA = require('./routes/GPA_routes');
var UserJob = require('./routes/userjob_routes')

// --------------------------------------------------
//var address = require('./routes/address_routes');
//var company = require('./routes/company_routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Added for Lab 11
//require('./config/passport')(passport); //pass passport for configuration
//app.use(session({secret: 'lab11'}));
//app.use(passport.initialize());
//app.use(passport.session());
app.use(session({secret: 'lab11'}));

// --------------------------------------------------
app.use('/account', account);
app.use('/school', school);
app.use('/GPA', GPA);
app.use('/UserJob', UserJob);

// --------------------------------------------------

app.use('/', routes);
app.use('/users', user);

app.use('/user', user);
app.use('/account', account);
//app.use('/address', address);
//app.use('/company', company);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;