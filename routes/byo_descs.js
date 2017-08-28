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

async function deleteByo_Descs(id) {
  return Byo_Descs.where({
    id: id
  }).destroy();
}

async function addByo_Descs(d) {
  return new Byo_Descs(d).save();
}

// GET ALL THE Discriptions
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

// GET A Discriptions WITH ID=?
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

router.delete('/:id', function(req, res, next) {
  deleteByo_Descs(req.params.id)
    .then((d) => {
      res.status(200).send("Byo Description deleted.");
    });
});
// CREATE A NEW DIRECTOR
router.post('/', function(req, res, next) {
  addByo_Descs(req.body).then((d) => {
    res.status(200).json({ success: true });
  });
});

module.exports = router;
