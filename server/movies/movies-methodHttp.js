//MÉTODOS MOVIES- LENGUAJE CONTROLLER
const { getConnection } = require("../database/conexion");

//GET - SELECT
function getMovies(req, res) {
  getConnection().execute(
    "SELECT PKMovies,name_movies, gender, duration,FK_idDirector, d.name_Director FROM moviesbd.movies INNER JOIN moviesbd.director as d ON movies.FK_idDirector = d.PK_idDirector",
    function (err, result) {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").json(err);
        return;
      }
      res.header("Access-Control-Allow-Origin", "*").json(result);
    }
  );
}
function getMovie(req, res) {
  const { id } = req.params;
  getConnection().execute(
    "SELECT * FROM moviesbd.movies WHERE PKMovies = ?",
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

// POST - INSERT INTO -NO JALÓ CON EXECUTE
function addMovies(req, res) {
  const { name_movies, gender, duration, FK_idDirector } = req.body;
  const movie = { name_movies, gender, duration, FK_idDirector };
  getConnection().query(
    "INSERT INTO moviesbd.movies SET ?",
    [movie],
    function (err, result) {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").json(err);
        return;
      }
      res.header("Access-Control-Allow-Origin", "*").json(result);
    }
  );
}

//DELETE - DELETE
function deleteMovie(req, res) {
  const { id } = req.params;
  getConnection().execute(
    "DELETE FROM moviesbd.movies WHERE PKMovies = ?",
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
function updateMovie(req, res) {
  //Modificación- FK
  const { id } = req.params;
  const { name_movies, gender, duration, FK_idDirector } = req.body;
  //const director = {  name_movies, gender, duration };
  getConnection().execute(
    "UPDATE moviesbd.movies SET name_movies=?, gender=?, duration=?,FK_idDirector=? WHERE PKMovies = ?",
    [name_movies, gender, duration, FK_idDirector, id],
    function (err, result) {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").json(err);
        return;
      }
      res.header("Access-Control-Allow-Origin", "*").json(result);
    }
  );
}

//EXPORTS
module.exports = {
  getMovies,
  getMovie,
  addMovies,
  updateMovie,
  deleteMovie,
};
