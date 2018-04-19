//setting up the server
//requiring the proper credentials
const express = require('express');
const logger  = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//opening the port to 3000
//it will scan the environment for a port named 3000
const PORT = process.env.PORT || 3000;

//requiring the routers, and the paths that lead to them
const playStationRouter = require('./routes/playStationRouter');
const xboxRouter = require('./routes/xboxRouter');

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.render('home/index');
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}, in ${app.get('env')}!`);
})
