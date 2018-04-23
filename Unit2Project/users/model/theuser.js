const pgp = require('pg-promise')();


const dbConfig = require('../../config/dbConfig');

const db = pgp(dbConfig);


module.exports = {
  allUsers() {
    return db.many (`
      SELECT *
      FROM users
      ORDER BY id`);
  },

  oneUser(username){
    return db.one(`
      SELECT *
      FROM users
      WHERE username = $1`,
      username);
  },

  userById(id){
    return db.one(`
      SELECT *
      FROM users
      WHERE email = $1`, id);
  },

  userSave(user){
    return db.one(`
      INSERT INTO users (
      username, password_digest, email, firstname, lastname, avatar)
      VALUES ($/username/, $/password_digest/, $/email/, $/firstname/, $/lastname/, $/avatar/)
      `, user);
  },

  userUpdate(user){
    return db.one(`
      UPDATE users
      SET content = $/content/,
      author = $/author/,
      genre_type = $/genre_type/
      WHERE id = $/id/
      zip   = $/zip/
      RETURNING *
    `, user
      )
  },

  userDestroy(id) {
    return db.none(`
      DELETE
      FROM users
      WHERE id = $1`, id);
  }

  };


