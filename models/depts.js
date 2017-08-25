const Bookshelf = require('../bookshelf');
require('./depts')

const Dept = Bookshelf.Model.extend({
  tableName: 'dept',
  hasTimestamps: true,
  classes: function () {
    return this.belongsToMany('Class');
  }
});

module.exports = Bookshelf.model('Dept', Dept);
