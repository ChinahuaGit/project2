const Bookshelf = require('../bookshelf');
require('./depts')
require('./sub_classes')

const Class = Bookshelf.Model.extend({
  tableName: 'class',
  hasTimestamps: true,
  dept: function () {
    return this.belongsTo('Dept');
  },
  sub_classes: function () {
    return this.belongsToMany('Sub_Class');
  }
});

module.exports = Bookshelf.model('Class', Class);
