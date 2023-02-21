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

router.post('/', async function(req, res, next) {
  let newIncome = req.body;
  let sql = `
    INSERT INTO income (text, amount)
    VALUES ("${newIncome.text}", ${newIncome.amount})
  `;
  try {
    await db(sql);
    let result = await db(`SELECT * FROM income`);
    res.status(201).send(result.data)
  } catch(err) {
    res.status(500).send({error: err.message})
  }
})

module.exports = router;
