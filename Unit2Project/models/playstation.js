const db = require ('../config/connection');

function getAllPGames() {
  return db.many(`
  SELECT * FROM playstation
  `);
}


function getOnePGame(id) {
  return db.one(`
   SELECT * FROM playstation
   WHERE id = $1`, id);

}

function makePGame(playstation){
    return db.one (`
    INSERT INTO playstation
    (name, release, developer, image)
    VALUES ($/name/, $/release/, $/developer/, $/image/)
    RETURNING *`, playstation);
}

function updatePGame(id) {
    return db.one (`
    UPDATE playstation
    SET name = $/name/, release = $/release/,
    developer = $/developer/, image = $/image/, id = $/id/
    WHERE id = $/id/
    RETURNING *`, playstation);

}

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

