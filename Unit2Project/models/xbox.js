const db = require ('../config/connection');

function getOneXGame() {
  return db.any(`
  SELECT * FROM playstation
   `)
}

function makeXGame(){

}

function editXGame(){

}



function updateXGame() {

}

function deleteXGame(id){

}
module.exports = {
  getOneXGame,
  makeXGame,
  editXGame,
  updateXGame,
  deleteXGame
}

