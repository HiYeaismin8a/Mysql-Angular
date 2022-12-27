// RUTAS

const metodosDirector = require('./director-methodHttp');

const express = require('express');
const router = express.Router();
router.get("/", metodosDirector.getDirectores);
//router.get("/:id", metodosDirector.getDirector);
router.post("/", metodosDirector.addDirectores);


module.exports = router;
