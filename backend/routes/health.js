const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'API is healthy',
    date: new Date(),
  };

  res.status(200).send(data);
})

module.exports = router;
