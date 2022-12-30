// RUTAS

const metodosDirector = require('./director-methodHttp');

const express = require('express');
const router = express.Router();
router.get("/directores", metodosDirector.getDirectores);
router.get("/director/:id", metodosDirector.getDirector);
router.post("/director", metodosDirector.addDirectores);
router.put("/director/:id", metodosDirector.updateDirector);
router.delete("/director/:id", metodosDirector.deleteDirector);

module.exports = router;
