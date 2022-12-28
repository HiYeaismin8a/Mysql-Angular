//MÉTODOS - LENGUAJE CONTROLLER
var { getConnection } = require("../database/conexion");

//GET - SELECT
async function getDirectores(req, res) {
  return await getConnection().query(
    "SELECT * FROM moviesbd.Director",
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
const addDirectores = async (req, res) => {
  const conexion = await getConnection();
  try {
    const { name_Director, age, active_ } = req.body;
    const director = { name_Director, age, active_ };

    if (
      name_Director === undefined ||
      age === undefined ||
      active_ === undefined
    ) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }
    console.log(req.body);
    console.log(name_Director);
    const result = await conexion.query(
      "INSERT INTO moviesbd.director SET ?",
      director
    );
    res.json("ADDDirector", result, res);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
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
