var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET budget listing. */
router.get('/', async function(req, res, next) {
  try {
    let result = await db(`SELECT * FROM cost_estimate`);
      res.send(result.data);
  } catch (err) {
    res.status(500).send({error: err.message})
  }
});

router.post('/', async function (req, res, next) {
  let newBudgetItem = req.body;
  let sql = `
    INSERT INTO cost_estimate (text, amount, income_id)
    VALUES ("${newBudgetItem.text}", ${newBudgetItem.amount}, ${newBudgetItem.income_id})
  `;
  try {
    await db(sql);
    let result = await db(`SELECT * FROM cost_estimate`);
    res.status(201).send(result.data)
  } catch(err) {
    res.status(500).send({error: err.message})
  }
})

module.exports = router;
