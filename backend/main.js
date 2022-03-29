const express = require('express');
const app = express();


//On declare ici ce qu on importe.
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var passport = require('passport');
var session = require('express-session');


app.use(cors({
    origin:['http://localhost:4200', 'http://localhost:127.0.0.1:4200'],
    credentials:true
  }));


//Connexion a la DB.
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });


//passport pour la gestion du login
app.use(session({
    name:'myname.sid',
    resave:false,
    saveUninitialized:false,
    secret:'secret',
    cookie:{
      maxAge:36000000,
      httpOnly:false,
      secure:false
    }
  }));
  require('./config-passport/passport-config');
  app.use(passport.initialize());
  app.use(passport.session());


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));


//Gestion des routes API.
const registerRouter = require('./api/register-api');
const loginRouter = require('./api/login-api');
app.use('/register-api', registerRouter);
app.use('/login-api', loginRouter);


//Definition du port. PS: dernier bloc du code !
app.set('port', (process.env.port || 3000));
app.listen(app.get('port'), () => {
    console.log(`express server listening on port ${app.get('port')}`);
});
module.exports = app;