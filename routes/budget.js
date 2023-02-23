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
    INSERT INTO cost_estimate (text, amount)
    VALUES ("${newBudgetItem.text}", ${newBudgetItem.amount})
  `;
  try {
    await db(sql);
    let result = await db(`SELECT * FROM cost_estimate`);
    res.status(201).send(result.data)
  } catch(err) {
    res.status(500).send({error: err.message})
  }
})

router.delete('/:id', async function(req, res, next) {
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM cost_estimate WHERE id = ${id}`);
    if (result.data.length === 0) {
      res.status(404).send({error: `item not found`})
    } else {
      await db(`DELETE FROM cost_estimate WHERE id = ${id}`);
      let result = await db(`SELECT * FROM cost_estimate`);
      res.send(result.data)
    }
  } catch(err) {
    res.status(500).send({error: err.message})
  }
})

module.exports = router;
