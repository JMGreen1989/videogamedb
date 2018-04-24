//setting up the server
//requiring the proper credentials
const express = require('express');
const logger  = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const faker = require('faker');
const app = express();

const userService = require ('./users/auth/userservice');
const userRouter =  require ('./users/auth/userrouter');


//opening the port to 3000
//it will scan the environment for a port named 3000
const PORT = process.env.PORT || 3000;

//requiring the routers, and the paths that lead to them
const playStationRouter = require('./routes/playStationRouter');
const xboxRouter = require('./routes/xboxRouter');

//from the node sessions lessons.
app.set('secretServer', process.env.SECRET_SERVER);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use('/auth', userRouter);

app.use(logger('dev'));

// app.use(session({
//   secret:            app.get('secretServer'),
//   resave:            false,
//   saveUninitialized: false,
// }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home/index');
})

app.use('/playstation', playStationRouter);
app.use('/xbox', xboxRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}, in ${app.get('env')}!`);
})
