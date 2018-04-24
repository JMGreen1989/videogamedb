//   I went over the harry potter CRUD solution for syntax help

//   connecting my models to my connection file

const db = require ('../config/connection');

//   selecting all my xbox games from the xbox table

function getAllXGames() {
  return db.many (`
    SELECT * FROM xbox`);
}

//   getting one game from the table

function getOneXGame(id) {
  return db.one (`
   SELECT * FROM xbox
   WHERE id = $1`, id);

}

//   making a game and adding it to the table

function makeXGame(xbox){
    return db.one (`
    INSERT INTO xbox
    (name, release, developer, image)
    VALUES ($/name/, $/release/, $/developer/, $/image/)
    RETURNING *`, xbox);

}

//   updating already exisiting or added game data to

function updateXGame(id) {
    return db.one (`
    UPDATE xbox
    SET name = $/name/, release = $/release/,
    developer = $/developer/, image = $/image/, id = $/id/
    WHERE id = $/id/
    RETURNING *`, xbox);

}

//   deleting a game from the table

function deleteXGame(id){
    return db.none (`
      DELETE FROM xbox
      WHERE id = $1`, id);

}
module.exports = {
  getAllXGames,
  getOneXGame,
  makeXGame,
  updateXGame,
  deleteXGame
}

