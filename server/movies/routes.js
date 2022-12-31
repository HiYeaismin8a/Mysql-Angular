// RUTAS

const metodosMovies = require('./movies-methodHttp');

const express = require('express');
const router = express.Router();
router.get("/movies", metodosMovies.getMovies);
router.get("/movie/:id", metodosMovies.getMovie);
router.post("/movie", metodosMovies.addMovies);
router.put("/movie/:id", metodosMovies.updateMovie);
router.delete("/movie/:id", metodosMovies.deleteMovie);

module.exports = router;
