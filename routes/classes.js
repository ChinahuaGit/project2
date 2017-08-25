const express = require('express');
const router = express.Router();
const Classes = require('../models/classes');


async function getClassesByDeptId(id) {
  return Classes.where({
    dept_id: id
  }).fetchAll();
}
async function getClasses() {
  return Classes.fetchAll();
}
// GET ALL THE DIRECTORS
router.get('/html', function(req, res, next) {
  getClasses().then(classes => {
    res.render('class', {
      'class': classes.toJSON()
    });
  });
});

router.get('/', function(req, res, next) {
  getClasses().then(classes => {
    res.json(classes.toJSON());
  });
});

// GET A DIRECTOR WITH ID=?
router.get('/:id', function(req, res, next) {
  getClassesByDeptId(req.params.id)
    .then((d) => {
      if (d == null) {
        res.status(404).send("not found");
      } else {
        res.json(d.toJSON());
      }
    });
});

module.exports = router;
