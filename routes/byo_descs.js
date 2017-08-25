const express = require('express');
const Byo_Descs = require('../models/byo_desc');

const router = express.Router();

async function getByo_DescBySku(sku) {
  return Byo_Descs.where({
    sku: sku
  }).fetchAll();
}
async function getByo_Descs() {
  return Byo_Descs.fetchAll();
}
// GET ALL THE DIRECTORS
router.get('/html', function(req, res, next) {
  getByo_Descs().then(byo_descs => {
    res.render('byo_desc', {
      byo_desc: byo_descs.toJSON()
    });
  });
});

router.get('/', function(req, res, next) {
  getByo_Descs().then(byos => {
    res.json(byos.toJSON());
  });
});

// GET A DIRECTOR WITH ID=?
router.get('/:id', function(req, res, next) {
  getByo_DescBySku(req.params.id)
    .then(d => {
      if (d == null) {
        res.status(404).send("not found");
      } else {
        res.json(d.toJSON());
      }
    });
});

module.exports = router;
