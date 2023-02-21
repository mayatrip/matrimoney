var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET costs listing. */
router.get('/', async function(req, res, next) {
  try {
    let result = await db(`SELECT * FROM cost_actual`);
      res.send(result.data);
  } catch (err) {
    res.status(500).send({error: err.message})
  }
});

router.post('/', async function(req, res, next) {
  let newCostItem = req.body;
  let sql = `
    INSERT INTO cost_actual (text, amount, notes, income_id)
    VALUES ("${newCostItem.text}", ${newCostItem.amount}, "${newCostItem.notes}", ${newCostItem.income_id})
  `;
  try {
    await db(sql);
    let result = await db(`SELECT * FROM cost_actual`);
    res.status(201).send(result.data)
  } catch(err) {
    res.status(500).send({error: err.message})
  }
})

module.exports = router;
