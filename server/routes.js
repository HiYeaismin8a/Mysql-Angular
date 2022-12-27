const express = require('express');
const routeDirector = ('./director/routes');
const routeMovies = ('./movies/routes');
const router = express.Router();
router.use(routeDirector);
router.use(routeMovies);
