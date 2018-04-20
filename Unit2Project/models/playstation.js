const db = require ('../config/connection');

function getThePGame() {
    return db.any(`
        SELECT * FROM playstation
      `)
}

function makePGame(){

}

function editPGame(){

}



function updatePGame() {

}

function deletePGame(id){

}

module.exports = {
  getThePGame,
  makePGame,
  editPGame,
  updatePGame
}

