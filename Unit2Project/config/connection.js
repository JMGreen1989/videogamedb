//connecting pg-promise to the dbConfig folder and exporting it
//I double checked the syntax with harry potter CRUD
const pgp = require('pg-promise')();
const config = require('./dbConfig');

const db = pgp(config);

module.exports = db;
