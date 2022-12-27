// RUTAS

const metodosDirector = require('./director-methodHttp');

const express = require('express');
const router = express.Router();
router.get("/", metodosDirector.getDirectores);

module.exports = router;
