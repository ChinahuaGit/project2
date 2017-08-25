const express = require('express');
const Depts = require('../models/depts');

const router = express.Router();

async function getDept(id) {
  return Depts.where({
    dept_id: id
  }).fetch();
}
async function getDepts() {
  return Depts.fetchAll();
}
// GET ALL THE DIRECTORS
router.get('/html', function(req, res, next) {
  getDepts().then(depts => {
    res.render('dept', {
      dept: depts.toJSON()
    });
  });
});

router.get('/', function(req, res, next) {
  getDepts().then(depts => {
    res.json(depts.toJSON());
  });
});

// GET A DIRECTOR WITH ID=?
router.get('/:id', function(req, res, next) {
  getDept(req.params.id)
    .then((d) => {
      if (d == null) {
        res.status(404).send("not found");
      } else {
        res.json(d.toJSON());
      }
    });
});

module.exports = router;
