const Bookshelf = require('../bookshelf');
require('./byos')

const Byo = Bookshelf.Model.extend({
  tableName: 'byo',
  hasTimestamps: true,
  classes: function () {
    return this.belongsToMany('Byo_desc');
  }
});

module.exports = Bookshelf.model('Byo', Byo);
