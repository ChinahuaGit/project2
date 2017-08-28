const express = require('express');
const Sku = require('../models/skus');

const router = express.Router();

async function getSku(sku) {
  return Sku.where({
    sku: sku
  }).fetch();
}
async function getSkuDeptClassSubclass(sku) {
  return Sku.where({
    sku: sku
  }).fetch();
}
// GET ALL THE SKUs
router.get('/html', function(req, res, next) {
  getSku().then(byo_descs => {
    res.render('byo_desc', {
      byo_desc: byo_descs.toJSON()
    });
  });
});

router.get('/', function(req, res, next) {
  res.status(700).send("Too many SKUs. Narrow Criteria please.");
});

// GET A SKU WITH ID=?
router.get('/:id', function(req, res, next) {
  getSku(req.params.id)
    .then(d => {
      if (d == null) {
        res.status(404).send("not found");
      } else {
        res.json(d.toJSON());
      }
    });
});


module.exports = router;
