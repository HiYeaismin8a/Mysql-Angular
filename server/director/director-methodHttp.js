//MÉTODOS - LENGUAJE CONTROLLER
var { getConnection } = require("../database/conexion");

//GET - SELECT
async function getDirectores(req, res) {
  return await getConnection().query( 'SELECT * FROM moviesbd.vistaDirector', function (err, result, fields) {
    if (err) {
        console.log(err);
        return null;
    }
    console.log(result);
    res.json(result);
  }
  );
}

// POST - INSERT INTO

//DELETE - DELETE

//UPDATE - UPDATE




//EXPORTS
module.exports = {
  getDirectores,
};
