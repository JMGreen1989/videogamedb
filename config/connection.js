//   connecting pg-promise to the dbConfig folder and exported it
//   I double checked the syntax with harry potter CRUD

  const pgp     = require('pg-promise')();
  const config  = require('./dbConfig');
  // const db      =  pgp(config);

  function setDatabase() {
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp(config)
    } else if (process.env.NODE_ENV === 'production') {
        return pgp(process.env.DATABASE_URL);
    }
}

const db = setDatabase();

  module.exports = db;
