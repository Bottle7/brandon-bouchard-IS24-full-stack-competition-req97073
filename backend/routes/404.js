const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.status(404).send("Uh oh! There is no page here.")
})

module.exports = router;
