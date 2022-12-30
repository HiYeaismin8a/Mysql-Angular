//MÉTODOS - LENGUAJE CONTROLLER
var { getConnection } = require("../database/conexion");

//GET - SELECT
async function getDirectores(req, res) {
  getConnection().query(
    "SELECT * FROM moviesbd.Director",
    function (err, result) {
      if (err) {
        console.log(err);
        res.header('Access-Control-Allow-Origin', '*').json(err);
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').json(result);
    }
  );
};
async function getDirector(req, res) {
  const { id } = req.params;
  return await getConnection().query(
    "SELECT * FROM moviesbd.director WHERE PK_idDirector = ?", id,
    function (err, result, fields) {
      if (err) {
        console.log(err);
        return null;
      }
      console.log(result);
      res.json(result);
    }
  );
};

// POST - INSERT INTO
async function addDirectores(req, res) {
  const { name_Director, age, active_ } = req.body;
  const director = { name_Director, age, active_ };
  return await getConnection().query(
    "INSERT INTO moviesbd.director SET ?", director,
    function (err, result, fields) {
      if (err) {
        console.log(err);
        return null;
      }
      console.log(result);
      res.json(result);
    }
  );
};

//DELETE - DELETE
async function deleteDirector(req, res) {
  const { id } = req.params;
  return await getConnection().query(
    "DELETE FROM moviesbd.director WHERE PK_idDirector = ?", id,
    function (err, result, fields) {
      if (err) {
        console.log(err);
        return null;
      }
      console.log(result);
      res.json(result);
    }
  );
};


//UPDATE - PUT
async function updateDirector(req, res) {
  const { id } = req.params;
  const { name_Director, age,active_ } = req.body;
  const director = { name_Director, age, active_ };
  return await getConnection().query(
    "UPDATE moviesbd.director SET ? WHERE PK_idDirector = ?", [director, id],
    function (err, result, fields) {
      if (err) {
        console.log(err);
        return null;
      }
      console.log(result);
      res.json(result);
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
