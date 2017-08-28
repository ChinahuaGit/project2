const express = require('express');
const router = express.Router();
const SubClasses = require('../models/sub_classes');


async function getSubClassesDeptAndClassId(dept_id, class_id) {
  return SubClasses.where({
    // console.log(subclass;
    dept_id: dept_id, class_id: class_id
  }).fetchAll();
}
async function getSubClasses() {
  return SubClasses.fetchAll({

  });
}
// GET ALL THE SubClasses
router.get('/html', function(req, res, next) {
  getSubClasses().then((sub_classes) => {
    res.render('subclass', {
      'subclass': sub_classes.toJSON()
    });
  });
});

router.get('/', function(req, res, next) {
  getSubClasses().then((sub_classes) => {
    res.json(sub_classes.toJSON());
  });
});

// GET A sub_class WITH ID=?
router.get('/:did/:cid', function(req, res, next) {
  getSubClassesDeptAndClassId(req.params.did, req.params.cid)
    .then((d) => {
      if (d == null) {
        res.status(404).send("not found");
      } else {
        res.json(d.toJSON());
      }
    });
});

module.exports = router;
