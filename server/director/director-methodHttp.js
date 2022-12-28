//MÉTODOS - LENGUAJE CONTROLLER
var { getConnection } = require("../database/conexion");

//GET - SELECT
async function getDirectores(req, res) {
  return await getConnection().query(
    "SELECT * FROM moviesbd.vistadirector",
    function (err, result, fields) {
      if (err) {
        console.log(err);
        return null;
      }
      console.log(result);
      res.json(result);
    }
  );
}

// const getDirector = async (req, res) => {
//   try {
//     console.log(req.params);
//     const { idDirector } = req.params;
//     const connection = await getConnection();
//     const result = await connection.query("SELECT PK_idDirector, name_Director, age, active_ FROM moviesbd.director WHERE PK_idDirector = ?", idDirector);
//     res.json(result);
// } catch (error) {
//     res.status(500);
//     res.send(error.message);
// }
// };


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
    } // console.log(req.body);

    console.log(name_Director);
    const result = await conexion.query(
      "INSERT INTO moviesbd.director SET ?",
      director
    );
    res.json("ADDDirector", result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//DELETE - DELETE

//UPDATE - UPDATE
//EXPORTS
module.exports = {
  getDirectores,
  addDirectores,
};