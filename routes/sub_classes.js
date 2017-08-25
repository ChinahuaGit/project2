const express = require('express');
const router = express.Router();
const SubClasses = require('../models/sub_classes');


async function getSubClasse(id) {
  return SubClasses.where({
    id: id
  }).fetch({
    withRelated: {
      movies: function(qb) {
        qb.orderBy("subclass_id", "subclass");
      }
    }
  });
}
async function getSubClasses() {
  return SubClasses.fetchAll({
    withRelated: {
      movies: function(qb) {
        qb.orderBy("subclass_id", "subclass");
      }
    }
  });
}
// GET ALL THE DIRECTORS
router.get('/html', function(req, res, next) {
  getSubClasses().then((depts) => {
    res.render('depts', {
      'depts': depts.toJSON()
    });
  });
});

router.get('/', function(req, res, next) {
  getSubClasses().then((depts) => {
    res.json(depts.toJSON());
  });
});

// GET A DIRECTOR WITH ID=?
router.get('/:id', function(req, res, next) {
  getSubClass(req.params.id)
    .then((d) => {
      if (d == null) {
        res.status(404).send("not found");
      } else {
        res.json(d.toJSON());
      }
    });
});

module.exports = router;
