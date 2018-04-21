const db = require ('../config/connection');

function getAllPGames() {
  const psQuery = db.manyOrNone(`
    SELECT * FROM playstation`);
  return psQuery;
}


function getOnePGame(id) {
  const psQuery = db.one(`
   SELECT * FROM playstation
   WHERE id = $1`, id);
   return psQuery;
}

function makePGame(){
    const psQuery = db.one (`
    INSERT INTO playstation
    (name, release, developer, image, game_id)
    VALUES($/name/, $/release/, $/developer/, $/image/, $/game_id)
    RETURNING *`, playstation);
    return psQuery;
}

function updatePGame(playstation) {
    const psQuery = db.one(`
    UPDATE playstation
    SET name = $/name/, release = $/release/,
    developer = $/developer/, image = $/image/, game_id = $/game_id
    WHERE id = $/id/
    RETURNING *`, playstation);
    return psQuery;
}

function deletePGame(id){
    const psQuery = db.none(`
      DELETE FROM playstation
      WHERE id = $1`, id);
      return psQuery;
}

module.exports = {
  getAllPGames,
  getOnePGame,
  makePGame,
  updatePGame,
  deletePGame
}

