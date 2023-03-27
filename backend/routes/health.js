const express = require('express');
const router = express.Router();
const { healthControllers } = require("../controllers")

/**
 * GET healthcheck
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /health
 */
router.get('/', healthControllers.healthcheck)

module.exports = router;
