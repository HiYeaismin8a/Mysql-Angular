//MÉTODOS - LENGUAJE CONTROLLER
var { getConnection } = require("../database/conexion");


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



module.exports = {
  getDirectores,
};
