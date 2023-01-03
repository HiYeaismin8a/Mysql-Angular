//MÉTODOS - LENGUAJE CONTROLLER
const { getConnection } = require("../database/conexion");

//GET - SELECT
function getDirectores(req, res) {
  getConnection().execute(
    "SELECT * FROM moviesbd.Director",
    function (err, result) {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").json(err);
        return;
      }
      res.header("Access-Control-Allow-Origin", "*").json(result);
    }
  );
}
function getDirector(req, res) {
  const { id } = req.params;
  getConnection().execute(
    "SELECT * FROM moviesbd.director WHERE PK_idDirector = ?",
    [id],
    function (err, result) {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").json(err);
        return;
      }
      res.header("Access-Control-Allow-Origin", "*").json(result[0]);
    }
  );
}

// POST - INSERT INTO
function addDirectores(req, res) {
  const { name_Director, age, active_ } = req.body;
  const director = { name_Director, age, active_ };
  getConnection().query(
    "INSERT INTO moviesbd.director SET ?", director,
    function (err, result, fields) {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").json(err);
        return;
      }
      res.header("Access-Control-Allow-Origin", "*").json(result);
    }
  );
}

//DELETE - DELETE
function deleteDirector(req, res) {
  const { id } = req.params;
  getConnection().execute(
    "DELETE FROM moviesbd.director WHERE PK_idDirector = ?",
    [id],
    function (err, result) {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").json(err);
        return;
      }
      res.header("Access-Control-Allow-Origin", "*").json(result);
    }
  );
}

//UPDATE - PUT
function updateDirector(req, res) {
  const { id } = req.params;
  const { name_Director, age,active_ } = req.body;
  //const director = { name_Director, age, active_ };
  getConnection().execute(
    "UPDATE moviesbd.director SET name_Director=?,age=?,active_=? WHERE PK_idDirector = ?", [ name_Director, age,active_, id],
    function (err, result) {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").json(err);
        return;
      }
      res.header("Access-Control-Allow-Origin", "*").json(result);
    }
  );
};

//EXPORTS
module.exports = {
  getDirectores,
  getDirector,
  addDirectores,
  updateDirector,
  deleteDirector,
};
