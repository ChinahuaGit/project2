const Bookshelf = require('../bookshelf');
require('./skus')
require('./byos')

const Byo_desc = Bookshelf.Model.extend({
  tableName: 'class',
  hasTimestamps: true,
  sku: function () {
    return this.belongsTo('Sku');
  },
  byo: function () {
    return this.belongsTo('Byo');
  }
});

module.exports = Bookshelf.model('Byo_desc', Byo_desc);
