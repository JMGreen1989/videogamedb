const db = require ('../config/connection');

function getAllXGames() {
  return db.many (`
    SELECT * FROM xbox`);

}


function getOneXGame(id) {
  return db.one (`
   SELECT * FROM xbox
   WHERE id = $1`, id);

}

function makeXGame(xbox){
    return db.one (`
    INSERT INTO xbox
    (name, release, developer, image)
    VALUES ($/name/, $/release/, $/developer/, $/image/)
    RETURNING *`, xbox);

}

function updateXGame(xbox) {
    return db.one (`
    UPDATE xbox
    SET name = $/name/, release = $/release/,
    developer = $/developer/, image = $/image/, id = $/id/
    WHERE id = $/id/
    RETURNING *`, xbox);

}

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

