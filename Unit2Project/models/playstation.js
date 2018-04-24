//   I went over the harry potter CRUD solution for syntax help

//   connecting my models to my connection file
const db = require ('../config/connection');

//   selecting all my playstation games from the playstation table

function getAllPGames() {
  return db.many(`
  SELECT * FROM playstation
  `);
}

//   getting one game from the table

function getOnePGame(id) {
  return db.one(`
   SELECT * FROM playstation
   WHERE id = $1`, id);

}

//   making a game and adding it to the table

function makePGame(playstation){
    return db.one (`
    INSERT INTO playstation
    (name, release, developer, image)
    VALUES ($/name/, $/release/, $/developer/, $/image/)
    RETURNING *`, playstation);
}

//   updating already exisiting or added game data to

function updatePGame(id) {
    return db.one (`
    UPDATE playstation
    SET name = $/name/, release = $/release/,
    developer = $/developer/, image = $/image/, id = $/id/
    WHERE id = $/id/
    RETURNING *`, playstation);

}
//   deleting a game from the table

function deletePGame(id){
    return db.none (`
      DELETE FROM playstation
      WHERE id = $1`, id);

}

module.exports = {
  getAllPGames,
  getOnePGame,
  makePGame,
  updatePGame,
  deletePGame
}

