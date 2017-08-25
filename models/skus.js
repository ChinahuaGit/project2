const Bookshelf = require('../bookshelf');
require('./depts')
require('./classes')
require('./sub_classes')
require('./byo_desc')

const Sku = Bookshelf.Model.extend({
  tableName: 'sku',
  hasTimestamps: true,
  dept: function () {
    return this.belongsTo('Dept');
  },
  sub_class: function () {
    return this.belongsTo('Sub_Class');
  },
  class: function () {
    return this.belongsTo('Class');
  },
  byo_descs: function () {
    return this.belongsToMany('Byo_desc');
  }
});

module.exports = Bookshelf.model('Sku', Sku);
