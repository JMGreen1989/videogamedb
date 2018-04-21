const db = require ('../config/connection');

function getAllXGames() {
  const xbQuery = db.manyOrNone(`
    SELECT * FROM xbox`);
  return xbQuery;
}


function getOneXGame() {
  const xbQuery = db.one(`
   SELECT * FROM xbox
   WHERE id = $1`, id);
   return xbQuery;
}

function makeXGame(){
    const xbQuery = db.one (`
    INSERT INTO xbox
    (name, release, developer, image, game_id)
    VALUES($/name/, $/release/, $/developer/, $/image/, $/game_id)
    RETURNING *`, xbox);
    return xbQuery;
}

function updateXGame(xbox) {
    const xbQuery = db.one(`
    UPDATE xbox
    SET name = $/name/, release = $/release/,
    developer = $/developer/, image = $/image/, game_id = $/game_id
    WHERE id = $/id/
    RETURNING *`, xbox);
    return xbQuery;
}

function deleteXGame(id){
    const xbQuery = db.none(`
      DELETE FROM xbox
      WHERE id = $1`, id);
      return xbQuery;
}
module.exports = {
  getAllXGames,
  getOneXGame,
  makeXGame,
  updateXGame,
  deleteXGame
}

