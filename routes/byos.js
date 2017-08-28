const express = require('express');
const Byos = require('../models/byos');

const router = express.Router();

async function getByo(id) {
  return Byos.where({
    number: id
  }).fetch();
}
async function getByos() {
  return Byos.fetchAll();
}
// GET ALL THE BYO
router.get('/html', function(req, res, next) {
  getByos().then(byos => {
    res.render('byo', {
      byo: byos.toJSON()
    });
  });
});

router.get('/', function(req, res, next) {
  getByos().then(byos => {
    res.json(byos.toJSON());
  });
});

// GET A BYO WITH ID=?
router.get('/:id', function(req, res, next) {
  getByo(req.params.id)
    .then((d) => {
      if (d == null) {
        res.status(404).send("not found");
      } else {
        res.json(d.toJSON());
      }
    });
});

module.exports = router;
