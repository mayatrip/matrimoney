var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET income listing. */
router.get('/', async function(req, res, next) {
  try {
    let result = await db(`SELECT * FROM income`);
      res.send(result.data);
  } catch (err) {
    res.status(500).send({error: err.message})
  }
});

module.exports = router;
